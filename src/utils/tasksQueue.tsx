function requestsQueue(concurrency) {
  let running = 0;
  const taskQueue = [];

  const runTask = (task) => {
    running++;
    task((_) => {
      running--;
      if (taskQueue.length > 0) {
        runTask(taskQueue.shift());
      }
    });
  };

  const enqueueTask = (task) => taskQueue.push(task);

  return {
    push: (task) => (running < concurrency ? runTask(task) : enqueueTask(task))
  };
}

const tasksQueue = requestsQueue(1);
export default tasksQueue;