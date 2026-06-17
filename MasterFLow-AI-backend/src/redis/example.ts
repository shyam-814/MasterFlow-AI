import { redisClient, QueueItem } from './redisClient';

// Example usage of the Redis client for cache and queue operations

async function exampleUsage() {
  try {
    // Connect to Redis
    await redisClient.connect();

    // ============= CACHE EXAMPLES =============
    console.log('=== Cache Examples ===');

    // Set cache with TTL
    await redisClient.cacheSet('user:123', 
      { id: 123, name: 'John Doe', email: 'john@example.com' },
      { ttl: 3600, namespace: 'users' } // 1 hour TTL
    );

    // Get from cache
    const user = await redisClient.cacheGet('user:123', { namespace: 'users' });
    console.log('Retrieved user:', user);

    // Check if key exists
    const exists = await redisClient.cacheExists('user:123', { namespace: 'users' });
    console.log('User exists:', exists);

    // Get TTL
    const ttl = await redisClient.cacheTTL('user:123', { namespace: 'users' });
    console.log('TTL remaining:', ttl, 'seconds');

    // ============= QUEUE EXAMPLES =============
    console.log('\n=== Queue Examples ===');

    interface TaskData {
      type: 'email' | 'sms' | 'push';
      recipient: string;
      message: string;
    }

    // Add tasks to queue with different priorities
    const taskId1 = await redisClient.queuePush<TaskData>('notifications', {
      type: 'email',
      recipient: 'user@example.com',
      message: 'Welcome to our platform!'
    });

    const taskId2 = await redisClient.queuePush<TaskData>('notifications', {
      type: 'sms',
      recipient: '+1234567890',
      message: 'Urgent: Account verification needed'
    }, 5); // High priority

    const taskId3 = await redisClient.queuePush<TaskData>('notifications', {
      type: 'push',
      recipient: 'device123',
      message: 'You have a new message'
    }, 2); // Medium priority

    console.log('Added tasks:', { taskId1, taskId2, taskId3 });

    // Check queue size
    const queueSize = await redisClient.queueSize('notifications');
    console.log('Queue size:', queueSize);

    // Peek at next task (without removing)
    const nextTask = await redisClient.queuePeek<TaskData>('notifications');
    console.log('Next task to process:', nextTask);

    // Process tasks (they'll come out in priority order)
    console.log('\nProcessing tasks:');
    let task: QueueItem<TaskData> | null;
    while ((task = await redisClient.queuePop<TaskData>('notifications')) !== null) {
      console.log(`Processing task ${task.id}:`, task.data);
      console.log(`Priority: ${task.priority || 0}, Created: ${new Date(task.timestamp).toISOString()}`);
      
      // Simulate task processing
      await new Promise(resolve => setTimeout(resolve, 100));
      console.log(`Task ${task.id} completed\n`);
    }

    // ============= HEALTH CHECK =============
    const health = await redisClient.getHealth();
    console.log('Redis health:', health);

  } catch (error) {
    console.error('Error:', error);
  } finally {
    // Clean up
    await redisClient.disconnect();
  }
}

// Worker function example - continuously process queue
async function queueWorker() {
  await redisClient.connect();
  
  console.log('Queue worker started...');
  
  while (true) {
    try {
      const task = await redisClient.queuePop('notifications');
      
      if (task) {
        console.log(`Worker processing task ${task.id}:`, task.data);
        // Process the task here
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log(`Task ${task.id} completed`);
      } else {
        // No tasks available, wait a bit
        await new Promise(resolve => setTimeout(resolve, 5000));
      }
    } catch (error) {
      console.error('Worker error:', error);
      await new Promise(resolve => setTimeout(resolve, 5000));
    }
  }
}

// Cache with automatic refresh example
async function cacheWithRefresh() {
  await redisClient.connect();
  
  const cacheKey = 'expensive-computation';
  const cacheOptions = { ttl: 300, namespace: 'computations' }; // 5 minutes
  
  // Try to get from cache first
  let result = await redisClient.cacheGet(cacheKey, cacheOptions);
  
  if (result === null) {
    console.log('Cache miss, computing expensive operation...');
    
    // Simulate expensive computation
    await new Promise(resolve => setTimeout(resolve, 2000));
    result = { value: Math.random() * 1000, computedAt: new Date().toISOString() };
    
    // Cache the result
    await redisClient.cacheSet(cacheKey, result, cacheOptions);
    console.log('Result cached');
  } else {
    console.log('Cache hit!');
  }
  
  console.log('Result:', result);
  await redisClient.disconnect();
}

// Priority Queue specific examples
async function priorityQueueExamples() {
  try {
    await redisClient.connect();
    console.log('=== Priority Queue Examples ===');

    // Clear any existing data
    await redisClient.queueClear('priority-tasks');

    interface PriorityTask {
      name: string;
      description: string;
      urgency: 'low' | 'medium' | 'high' | 'critical';
    }

    // Add tasks with different priorities (higher number = higher priority)
    console.log('\n1. Adding tasks with different priorities:');
    
    const lowPriorityTask = await redisClient.queuePush<PriorityTask>('priority-tasks', {
      name: 'Update documentation',
      description: 'Update the API documentation',
      urgency: 'low'
    }, 1); // Low priority
    console.log('Added low priority task:', lowPriorityTask);

    const mediumPriorityTask = await redisClient.queuePush<PriorityTask>('priority-tasks', {
      name: 'Code review',
      description: 'Review pull request #123',
      urgency: 'medium'
    }, 5); // Medium priority
    console.log('Added medium priority task:', mediumPriorityTask);

    const highPriorityTask = await redisClient.queuePush<PriorityTask>('priority-tasks', {
      name: 'Fix critical bug',
      description: 'Fix login system crash',
      urgency: 'high'
    }, 8); // High priority
    console.log('Added high priority task:', highPriorityTask);

    const criticalTask = await redisClient.queuePush<PriorityTask>('priority-tasks', {
      name: 'Security patch',
      description: 'Apply emergency security patch',
      urgency: 'critical'
    }, 10); // Critical priority
    console.log('Added critical priority task:', criticalTask);

    // Add some regular queue items (priority 0)
    const regularTask1 = await redisClient.queuePush<PriorityTask>('priority-tasks', {
      name: 'Regular task 1',
      description: 'Normal priority task',
      urgency: 'low'
    }); // No priority specified = 0
    console.log('Added regular task 1:', regularTask1);

    const regularTask2 = await redisClient.queuePush<PriorityTask>('priority-tasks', {
      name: 'Regular task 2', 
      description: 'Another normal priority task',
      urgency: 'low'
    }); // No priority specified = 0
    console.log('Added regular task 2:', regularTask2);

    console.log('\n2. Queue status:');
    const queueSize = await redisClient.queueSize('priority-tasks');
    console.log('Total queue size:', queueSize);

    // Show all tasks in priority order
    console.log('\n3. All tasks in priority order:');
    const allTasks = await redisClient.queueGetAll<PriorityTask>('priority-tasks');
    allTasks.forEach((task, index) => {
      console.log(`${index + 1}. [Priority: ${task.priority || 0}] ${task.data.name} - ${task.data.description}`);
    });

    // Peek at next task without removing it
    console.log('\n4. Peek at next task (without removing):');
    const nextTask = await redisClient.queuePeek<PriorityTask>('priority-tasks');
    if (nextTask) {
      console.log(`Next task: [Priority: ${nextTask.priority || 0}] ${nextTask.data.name}`);
    }

    // Process tasks in priority order
    console.log('\n5. Processing tasks in priority order:');
    let taskCount = 0;
    let task: QueueItem<PriorityTask> | null;
    
    while ((task = await redisClient.queuePop<PriorityTask>('priority-tasks')) !== null && taskCount < 6) {
      taskCount++;
      console.log(`Processing task ${taskCount}:`);
      console.log(`  - ID: ${task.id}`);
      console.log(`  - Priority: ${task.priority || 0}`);
      console.log(`  - Name: ${task.data.name}`);
      console.log(`  - Description: ${task.data.description}`);
      console.log(`  - Urgency: ${task.data.urgency}`);
      console.log(`  - Created: ${new Date(task.timestamp).toISOString()}`);
      
      // Simulate processing time based on urgency
      const processingTime = task.data.urgency === 'critical' ? 100 : 
                            task.data.urgency === 'high' ? 200 :
                            task.data.urgency === 'medium' ? 300 : 500;
      await new Promise(resolve => setTimeout(resolve, processingTime));
      console.log(`  ✓ Task completed in ${processingTime}ms\n`);
    }

    console.log('6. Final queue size:', await redisClient.queueSize('priority-tasks'));

  } catch (error) {
    console.error('Priority queue example error:', error);
  } finally {
    await redisClient.disconnect();
  }
}

// Advanced priority queue scenarios
async function advancedPriorityQueueScenarios() {
  try {
    await redisClient.connect();
    console.log('=== Advanced Priority Queue Scenarios ===');

    // Scenario 1: Job processing with dynamic priorities
    console.log('\n1. Job Processing with Dynamic Priorities:');
    await redisClient.queueClear('job-queue');

    interface Job {
      id: string;
      type: 'backup' | 'email' | 'report' | 'cleanup';
      userId: string;
      estimatedDuration: number;
    }

    // Add jobs with priorities based on type and user tier
    const jobs = [
      { type: 'email' as const, userId: 'premium_user_1', estimatedDuration: 30 },
      { type: 'backup' as const, userId: 'free_user_1', estimatedDuration: 300 },
      { type: 'report' as const, userId: 'premium_user_2', estimatedDuration: 120 },
      { type: 'cleanup' as const, userId: 'admin', estimatedDuration: 600 },
      { type: 'email' as const, userId: 'free_user_2', estimatedDuration: 30 },
    ];

    for (const job of jobs) {
      // Calculate priority based on job type and user tier
      let priority = 0;
      
      // Base priority by job type
      switch (job.type) {
        case 'email': priority = 8; break;
        case 'report': priority = 5; break;
        case 'backup': priority = 3; break;
        case 'cleanup': priority = 1; break;
      }
      
      // Boost priority for premium users
      if (job.userId.includes('premium')) {
        priority += 2;
      }
      
      // Boost priority for admin
      if (job.userId.includes('admin')) {
        priority += 5;
      }

      const jobData: Job = {
        id: `job_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
        ...job
      };

      const jobId = await redisClient.queuePush('job-queue', jobData, priority);
      console.log(`Added ${job.type} job for ${job.userId} (Priority: ${priority}) - ID: ${jobId}`);
    }

    // Process jobs
    console.log('\nProcessing jobs in priority order:');
    let job: QueueItem<Job> | null;
    while ((job = await redisClient.queuePop<Job>('job-queue')) !== null) {
      console.log(`Processing: ${job.data.type} for ${job.data.userId} (Priority: ${job.priority})`);
      console.log(`  Estimated duration: ${job.data.estimatedDuration}s`);
      await new Promise(resolve => setTimeout(resolve, 100)); // Simulate processing
      console.log(`  ✓ Completed job ${job.data.id}\n`);
    }

    // Scenario 2: Mixed regular and priority queue usage
    console.log('\n2. Mixed Regular and Priority Queue Usage:');
    await redisClient.queueClear('mixed-queue');

    interface Message {
      content: string;
      sender: string;
      channel: string;
    }

    // Add regular messages (FIFO)
    await redisClient.queuePush<Message>('mixed-queue', {
      content: 'Hello everyone!',
      sender: 'user1',
      channel: 'general'
    }); // No priority = regular queue

    await redisClient.queuePush<Message>('mixed-queue', {
      content: 'How is everyone doing?',
      sender: 'user2', 
      channel: 'general'
    }); // No priority = regular queue

    // Add priority messages
    await redisClient.queuePush<Message>('mixed-queue', {
      content: 'URGENT: Server maintenance in 5 minutes',
      sender: 'admin',
      channel: 'announcements'
    }, 9); // High priority

    await redisClient.queuePush<Message>('mixed-queue', {
      content: 'System alert: High CPU usage detected',
      sender: 'monitoring',
      channel: 'alerts'
    }, 7); // Medium-high priority

    await redisClient.queuePush<Message>('mixed-queue', {
      content: 'What time is the meeting?',
      sender: 'user3',
      channel: 'general'
    }); // No priority = regular queue

    console.log('All messages in processing order:');
    const allMessages = await redisClient.queueGetAll<Message>('mixed-queue');
    allMessages.forEach((msg, index) => {
      console.log(`${index + 1}. [Priority: ${msg.priority || 0}] ${msg.data.sender}: ${msg.data.content}`);
    });

    console.log('\nProcessing messages:');
    let message: QueueItem<Message> | null;
    while ((message = await redisClient.queuePop<Message>('mixed-queue')) !== null) {
      const priorityLabel = message.priority && message.priority > 0 ? 'PRIORITY' : 'REGULAR';
      console.log(`[${priorityLabel}] ${message.data.sender}: ${message.data.content}`);
    }

  } catch (error) {
    console.error('Advanced priority queue scenarios error:', error);
  } finally {
    await redisClient.disconnect();
  }
}

// Comprehensive Redis feature test
async function comprehensiveRedisTest() {
  try {
    await redisClient.connect();
    console.log('=== Comprehensive Redis Feature Test ===');

    // Test Redis health
    console.log('\n1. Testing Redis Health:');
    const health = await redisClient.getHealth();
    console.log('Health status:', health);

    if (!health.connected) {
      throw new Error('Redis is not connected');
    }

    // Test cache operations
    console.log('\n2. Testing Cache Operations:');
    
    // Test basic cache set/get
    await redisClient.cacheSet('test-key', { value: 'test-data', timestamp: Date.now() });
    const cachedData = await redisClient.cacheGet('test-key');
    console.log('✓ Basic cache set/get:', cachedData);

    // Test cache with TTL
    await redisClient.cacheSet('ttl-key', { data: 'expires-soon' }, { ttl: 2 });
    console.log('✓ Cache with TTL set');
    
    let ttl = await redisClient.cacheTTL('ttl-key');
    console.log('Initial TTL:', ttl);
    
    await new Promise(resolve => setTimeout(resolve, 3000));
    const expiredData = await redisClient.cacheGet('ttl-key');
    console.log('✓ Data after TTL expiry:', expiredData); // Should be null

    // Test cache with namespace
    await redisClient.cacheSet('user-1', { name: 'John' }, { namespace: 'users' });
    await redisClient.cacheSet('user-1', { name: 'Product A' }, { namespace: 'products' });
    
    const user = await redisClient.cacheGet('user-1', { namespace: 'users' });
    const product = await redisClient.cacheGet('user-1', { namespace: 'products' });
    console.log('✓ Namespace isolation - User:', user?.name, 'Product:', product?.name);

    // Test cache exists and delete
    const exists = await redisClient.cacheExists('user-1', { namespace: 'users' });
    console.log('✓ Cache exists:', exists);
    
    const deleted = await redisClient.cacheDelete('user-1', { namespace: 'users' });
    console.log('✓ Cache deleted:', deleted);
    
    const existsAfterDelete = await redisClient.cacheExists('user-1', { namespace: 'users' });
    console.log('✓ Exists after delete:', existsAfterDelete);

    // Test queue operations
    console.log('\n3. Testing Queue Operations:');
    await redisClient.queueClear('test-queue');

    // Test regular queue (FIFO)
    console.log('Testing FIFO queue:');
    await redisClient.queuePush('test-queue', { order: 1, message: 'First' });
    await redisClient.queuePush('test-queue', { order: 2, message: 'Second' });
    await redisClient.queuePush('test-queue', { order: 3, message: 'Third' });

    const size = await redisClient.queueSize('test-queue');
    console.log('✓ Queue size:', size);

    const peeked = await redisClient.queuePeek('test-queue');
    console.log('✓ Peeked item:', peeked?.data);

    console.log('Processing FIFO queue:');
    for (let i = 0; i < 3; i++) {
      const item = await redisClient.queuePop('test-queue');
      console.log(`  Item ${i + 1}:`, item?.data);
    }

    // Test priority queue
    console.log('\nTesting priority queue:');
    await redisClient.queueClear('test-queue');

    await redisClient.queuePush('test-queue', { priority: 'low' }, 1);
    await redisClient.queuePush('test-queue', { priority: 'high' }, 10);
    await redisClient.queuePush('test-queue', { priority: 'medium' }, 5);
    await redisClient.queuePush('test-queue', { priority: 'regular' }); // No priority

    console.log('Processing priority queue:');
    for (let i = 0; i < 4; i++) {
      const item = await redisClient.queuePop<{ priority: string }>('test-queue');
      console.log(`  Priority ${item?.priority || 0}: ${item?.data.priority}`);
    }

    console.log('\n✅ All tests completed successfully!');

  } catch (error) {
    console.error('❌ Test failed:', error);
  } finally {
    await redisClient.disconnect();
  }
}

// Uncomment to run examples:
// exampleUsage();
// queueWorker();
// cacheWithRefresh();
// priorityQueueExamples();
// advancedPriorityQueueScenarios();
// comprehensiveRedisTest();

export { 
  exampleUsage, 
  queueWorker, 
  cacheWithRefresh, 
  priorityQueueExamples, 
  advancedPriorityQueueScenarios,
  comprehensiveRedisTest 
};
