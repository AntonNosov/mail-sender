'use strict'

const Controller = require('./Base'),
  HttpError = require('standard-http-error')

class Main extends Controller {
  ping() {
    return 'pong'
  }

  notFound() {
    throw new HttpError(404, 'Unknown route')
  }
}

module.exports = Main
