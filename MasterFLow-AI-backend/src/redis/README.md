# Redis Client Documentation

A comprehensive Redis client class that provides both **cache** and **queue** functionality for your Node.js/TypeScript application.

## Features

### Cache Operations
- Set/Get values with optional TTL (Time To Live)
- Namespace support for organizing cache keys
- Check key existence and TTL
- Delete cached values

### Queue Operations
- FIFO (First In, First Out) queue operations
- Priority queue support
- Peek at next items without removing them
- Queue size monitoring
- Clear entire queues

### Additional Features
- Connection management with automatic reconnection
- Health checks
- Comprehensive logging
- TypeScript support with proper type definitions
- Singleton pattern for easy global access

## Installation

The Redis package is already installed in this project. If you need to install it manually:

```bash
npm install redis @types/redis
```

## Setup

1. Copy the environment example file:
```bash
cp .env.example .env
```

2. Update the Redis connection URL in `.env`:
```env
REDIS_URL=redis://localhost:6379
```

3. Start Redis server (if running locally):
```bash
# Using Docker
docker run -d -p 6379:6379 redis:alpine

# Using Redis installed locally
redis-server
```

## Usage

### Basic Setup

```typescript
import { redisClient } from './redis/redisClient';

// Connect to Redis
await redisClient.connect();

// Use the client...

// Disconnect when done
await redisClient.disconnect();
```

### Cache Examples

```typescript
// Set cache with TTL
await redisClient.cacheSet('user:123', 
  { id: 123, name: 'John Doe', email: 'john@example.com' },
  { ttl: 3600, namespace: 'users' } // 1 hour TTL
);

// Get from cache
const user = await redisClient.cacheGet('user:123', { namespace: 'users' });

// Check if key exists
const exists = await redisClient.cacheExists('user:123', { namespace: 'users' });

// Get TTL
const ttl = await redisClient.cacheTTL('user:123', { namespace: 'users' });

// Delete from cache
await redisClient.cacheDelete('user:123', { namespace: 'users' });
```

### Queue Examples

```typescript
interface TaskData {
  type: 'email' | 'sms' | 'push';
  recipient: string;
  message: string;
}

// Add tasks to queue
const taskId = await redisClient.queuePush<TaskData>('notifications', {
  type: 'email',
  recipient: 'user@example.com',
  message: 'Welcome!'
});

// Add high-priority task
await redisClient.queuePush<TaskData>('notifications', {
  type: 'sms',
  recipient: '+1234567890',
  message: 'Urgent message'
}, 5); // Priority 5 (higher numbers = higher priority)

// Process tasks
const task = await redisClient.queuePop<TaskData>('notifications');
if (task) {
  console.log('Processing:', task.data);
  // Process the task...
}

// Peek at next task without removing
const nextTask = await redisClient.queuePeek<TaskData>('notifications');

// Check queue size
const size = await redisClient.queueSize('notifications');

// Get all tasks (for debugging)
const allTasks = await redisClient.queueGetAll<TaskData>('notifications');

// Clear entire queue
await redisClient.queueClear('notifications');
```

## API Reference

### Cache Methods

- `cacheSet(key, value, options?)` - Set a value with optional TTL and namespace
- `cacheGet<T>(key, options?)` - Get a value (returns null if not found)
- `cacheDelete(key, options?)` - Delete a value
- `cacheExists(key, options?)` - Check if key exists
- `cacheTTL(key, options?)` - Get remaining TTL in seconds

### Queue Methods

- `queuePush<T>(queueName, data, priority?)` - Add item to queue
- `queuePop<T>(queueName)` - Get and remove next item
- `queuePeek<T>(queueName)` - Look at next item without removing
- `queueSize(queueName)` - Get queue size
- `queueClear(queueName)` - Clear all items
- `queueGetAll<T>(queueName)` - Get all items (for debugging)

### Utility Methods

- `connect()` - Connect to Redis
- `disconnect()` - Disconnect from Redis
- `getHealth()` - Get connection status and ping
- `flushAll()` - Clear all data (use with caution!)

## Data Structures

### QueueItem Interface
```typescript
interface QueueItem<T = any> {
  id: string;          // Unique identifier
  data: T;             // Your data
  timestamp: number;   // Creation timestamp
  priority?: number;   // Priority level (optional)
}
```

### CacheOptions Interface
```typescript
interface CacheOptions {
  ttl?: number;        // Time to live in seconds
  namespace?: string;  // Key namespace/prefix
}
```

## Error Handling

All methods throw errors that should be caught:

```typescript
try {
  await redisClient.cacheSet('key', 'value');
} catch (error) {
  console.error('Redis error:', error);
}
```

## Best Practices

1. **Connection Management**: Connect once at application startup, disconnect at shutdown
2. **Error Handling**: Always wrap Redis operations in try-catch blocks
3. **Namespaces**: Use namespaces to organize cache keys by feature/module
4. **TTL**: Set appropriate TTL values to prevent memory issues
5. **Priority Queues**: Use priorities sparingly and consistently
6. **Monitoring**: Monitor queue sizes and cache hit rates in production

## Worker Pattern

For background job processing:

```typescript
async function queueWorker() {
  await redisClient.connect();
  
  while (true) {
    try {
      const task = await redisClient.queuePop('jobs');
      
      if (task) {
        // Process task
        await processTask(task.data);
      } else {
        // No tasks, wait
        await sleep(5000);
      }
    } catch (error) {
      console.error('Worker error:', error);
      await sleep(5000);
    }
  }
}
```

## Environment Variables

- `REDIS_URL` - Full Redis connection URL
- `REDIS_HOST` - Redis hostname (alternative to URL)
- `REDIS_PORT` - Redis port (alternative to URL)
- `REDIS_PASSWORD` - Redis password (if required)
- `REDIS_DB` - Redis database number (default: 0)
