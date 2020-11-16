'use strict'

const Models = require('../models'),
  servicesInit = require('../services'),
  config = require('./config.js'),
  mongoose = require('mongoose'),
  Bull = require('bull'),
  { setQueues } = require('bull-board')

module.exports = async function () {
  await mongoose.connect(config.mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  const queue = {
    mailHelper: new Bull(config.redis.queues.mailHelper.name, config.redis)
  }
  setQueues(Object.values(queue))
  const models = Models(mongoose)
  const services = servicesInit(config, models, queue)
  return { config, models, queue, services }
}
