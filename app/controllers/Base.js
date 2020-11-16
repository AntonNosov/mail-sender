'use strict'

class Controller {
  constructor({ config, models, queue, services }) {
    this.config = config
    this.models = models
    this.queue = queue;
    this.services = services
  }
}

module.exports = Controller
