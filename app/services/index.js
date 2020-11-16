'use strict'

const daoInit = require('./dao'),
  MailHelper = require('./MailHelper'),
  QueuesHelper = require('./QueuesHelper')

module.exports = function (config, models, queue) {
  const queuesHelper = new QueuesHelper(queue, config.redis.queues)

  return {
    dao: daoInit(models, queuesHelper),
    mailHelper: new MailHelper(config, models)
  }
}
