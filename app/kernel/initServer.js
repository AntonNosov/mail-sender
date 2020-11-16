'use strict'

const server = require('./server'),
  Router = require('./Router')

/**
 * @param initObj
 * @returns {Express}
 */
module.exports = function (initObj) {
  const router = new Router(server, initObj)
  router.addEventsListeners()
  return server
}
