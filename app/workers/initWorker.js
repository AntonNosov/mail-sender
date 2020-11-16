const init = require('../kernel/init')

module.exports = function(WorkerClass, callback) {
  (async function() {
    const initObj = await init()
    let worker = new WorkerClass(initObj)
    callback(worker)
  })()

  process.on('unhandledRejection', () => {
    process.exit(3)
  })
}

/*
 * Usage example:
 * initWorker(WorkerClass, worker => {
 *   worker.listen('queueName')
 * })
 *
 * */
