'use strict'

class Worker {
  constructor({ config, models, queue, services }) {
    this.models = models
    this.config = config
    this.queue = queue
    this.services = services
  }

  listen(queueName, jobsName = '*', concurrency = 1) {
    this.queue[queueName].process(jobsName, concurrency, async (job, done) => {
      console.log(`Received job for queue ${ queueName } / ${ jobsName }.`, job.data)
      await this.execute(job, done)
    })
    console.log(`Queue ${ queueName } / ${ jobsName } listening.`)
  }

  execute(job, done) {
    throw new Error(`Execute method must be implement for queue ${ this.jobsName }`)
  }
}

module.exports = Worker
