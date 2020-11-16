'use strict'

const Controller = require('./Base')

class Mail extends Controller {
  async create(req) {
    await this.services.dao.mail.create(req.body)
    return { result: 'success' }
  }
}

module.exports = Mail
