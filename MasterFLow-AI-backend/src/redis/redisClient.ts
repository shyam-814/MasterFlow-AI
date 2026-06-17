import { createClient, RedisClientType } from 'redis';
import { logger } from '../logger/logger';

export interface QueueItem<T = any> {
  id: string;
  data: T;
  timestamp: number;
  priority?: number;
}

export interface CacheOptions {
  ttl?: number; // Time to live in seconds
  namespace?: string;
}

export class RedisClient {
  private client: RedisClientType;
  private isConnected: boolean = false;

  constructor(url?: string) {
    this.client = createClient({
      url: url || process.env.REDIS_URL || 'redis://localhost:6379'
    });

    this.client.on('error', (err) => {
      logger.error('Redis Client Error:', err);
    });

    this.client.on('connect', () => {
      logger.info('Redis Client Connected');
      this.isConnected = true;
    });

    this.client.on('disconnect', () => {
      logger.warn('Redis Client Disconnected');
      this.isConnected = false;
    });
  }

  async connect(): Promise<void> {
    try {
      if (!this.isConnected) {
        await this.client.connect();
      }
    } catch (error) {
      logger.error('Failed to connect to Redis:', error);
      throw error;
    }
  }

  async disconnect(): Promise<void> {
    try {
      if (this.isConnected) {
        await this.client.disconnect();
      }
    } catch (error) {
      logger.error('Failed to disconnect from Redis:', error);
      throw error;
    }
  }

  // ============= CACHE OPERATIONS =============

  /**
   * Set a value in the cache with optional TTL
   */
  async cacheSet(key: string, value: any, options?: CacheOptions): Promise<void> {
    try {
      const finalKey = options?.namespace ? `${options.namespace}:${key}` : key;
      const serializedValue = JSON.stringify(value);

      if (options?.ttl) {
        await this.client.setEx(finalKey, options.ttl, serializedValue);
      } else {
        await this.client.set(finalKey, serializedValue);
      }

      logger.debug(`Cache set: ${finalKey}`);
    } catch (error) {
      logger.error('Cache set error:', error);
      throw error;
    }
  }

  /**
   * Get a value from the cache
   */
  async cacheGet<T = any>(key: string, options?: CacheOptions): Promise<T | null> {
    try {
      const finalKey = options?.namespace ? `${options.namespace}:${key}` : key;
      const value = await this.client.get(finalKey);

      if (value === null) {
        return null;
      }

      logger.debug(`Cache get: ${finalKey}`);
      return JSON.parse(value) as T;
    } catch (error) {
      logger.error('Cache get error:', error);
      throw error;
    }
  }

  /**
   * Delete a value from the cache
   */
  async cacheDelete(key: string, options?: CacheOptions): Promise<boolean> {
    try {
      const finalKey = options?.namespace ? `${options.namespace}:${key}` : key;
      const result = await this.client.del(finalKey);
      logger.debug(`Cache delete: ${finalKey}`);
      return result > 0;
    } catch (error) {
      logger.error('Cache delete error:', error);
      throw error;
    }
  }

  /**
   * Check if a key exists in the cache
   */
  async cacheExists(key: string, options?: CacheOptions): Promise<boolean> {
    try {
      const finalKey = options?.namespace ? `${options.namespace}:${key}` : key;
      const result = await this.client.exists(finalKey);
      return result > 0;
    } catch (error) {
      logger.error('Cache exists error:', error);
      throw error;
    }
  }

  /**
   * Get TTL of a cached item
   */
  async cacheTTL(key: string, options?: CacheOptions): Promise<number> {
    try {
      const finalKey = options?.namespace ? `${options.namespace}:${key}` : key;
      return await this.client.ttl(finalKey);
    } catch (error) {
      logger.error('Cache TTL error:', error);
      throw error;
    }
  }

  // ============= QUEUE OPERATIONS =============

  /**
   * Add an item to the queue (FIFO)
   */
  async queuePush<T>(queueName: string, data: T, priority: number = 0): Promise<string> {
    try {
      const queueItem: QueueItem<T> = {
        id: this.generateId(),
        data,
        timestamp: Date.now(),
        priority
      };

      const serializedItem = JSON.stringify(queueItem);
      
      // Use priority queue if priority is specified
      if (priority > 0) {
        await this.client.zAdd(`${queueName}:priority`, {
          score: priority,
          value: serializedItem
        });
      } else {
        await this.client.lPush(queueName, serializedItem);
      }

      logger.debug(`Queue push: ${queueName}, ID: ${queueItem.id}`);
      return queueItem.id;
    } catch (error) {
      logger.error('Queue push error:', error);
      throw error;
    }
  }

  /**
   * Get an item from the queue (FIFO)
   */
  async queuePop<T>(queueName: string): Promise<QueueItem<T> | null> {
    try {
      // First check priority queue
      const priorityResult = await this.client.zPopMax(`${queueName}:priority`);
      if (priorityResult) {
        const item = JSON.parse(priorityResult.value) as QueueItem<T>;
        logger.debug(`Queue pop (priority): ${queueName}, ID: ${item.id}`);
        return item;
      }

      // Then check regular queue
      const result = await this.client.rPop(queueName);
      if (result === null) {
        return null;
      }

      const item = JSON.parse(result) as QueueItem<T>;
      logger.debug(`Queue pop: ${queueName}, ID: ${item.id}`);
      return item;
    } catch (error) {
      logger.error('Queue pop error:', error);
      throw error;
    }
  }

  /**
   * Peek at the next item in the queue without removing it
   */
  async queuePeek<T>(queueName: string): Promise<QueueItem<T> | null> {
    try {
      // First check priority queue
      const priorityResult = await this.client.zRange(`${queueName}:priority`, -1, -1, {
        REV: true
      });
      
      if (priorityResult.length > 0 && priorityResult[0] !== undefined) {
        const item = JSON.parse(priorityResult[0]) as QueueItem<T>;
        return item;
      }

      // Then check regular queue
      const result = await this.client.lIndex(queueName, -1);
      if (result === null) {
        return null;
      }

      return JSON.parse(result) as QueueItem<T>;
    } catch (error) {
      logger.error('Queue peek error:', error);
      throw error;
    }
  }

  /**
   * Get the size of the queue
   */
  async queueSize(queueName: string): Promise<number> {
    try {
      const regularSize = await this.client.lLen(queueName);
      const prioritySize = await this.client.zCard(`${queueName}:priority`);
      return regularSize + prioritySize;
    } catch (error) {
      logger.error('Queue size error:', error);
      throw error;
    }
  }

  /**
   * Clear all items from the queue
   */
  async queueClear(queueName: string): Promise<void> {
    try {
      await this.client.del(queueName);
      await this.client.del(`${queueName}:priority`);
      logger.debug(`Queue cleared: ${queueName}`);
    } catch (error) {
      logger.error('Queue clear error:', error);
      throw error;
    }
  }

  /**
   * Get all items in the queue (for debugging)
   */
  async queueGetAll<T>(queueName: string): Promise<QueueItem<T>[]> {
    try {
      const regularItems = await this.client.lRange(queueName, 0, -1);
      const priorityItems = await this.client.zRange(`${queueName}:priority`, 0, -1);
      
      const allItems = [
        ...priorityItems.map(item => JSON.parse(item) as QueueItem<T>),
        ...regularItems.map(item => JSON.parse(item) as QueueItem<T>)
      ];

      return allItems.sort((a, b) => (b.priority || 0) - (a.priority || 0));
    } catch (error) {
      logger.error('Queue get all error:', error);
      throw error;
    }
  }

  // ============= UTILITY METHODS =============

  /**
   * Generate a unique ID for queue items
   */
  private generateId(): string {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Get Redis client health status
   */
  async getHealth(): Promise<{ connected: boolean; ping?: string }> {
    try {
      if (!this.isConnected) {
        return { connected: false };
      }

      const ping = await this.client.ping();
      return { connected: true, ping };
    } catch (error) {
      logger.error('Redis health check error:', error);
      return { connected: false };
    }
  }

  /**
   * Flush all data from Redis (use with caution!)
   */
  async flushAll(): Promise<void> {
    try {
      await this.client.flushAll();
      logger.warn('Redis: All data flushed');
    } catch (error) {
      logger.error('Redis flush all error:', error);
      throw error;
    }
  }
}

// Export a singleton instance
export const redisClient = new RedisClient();

