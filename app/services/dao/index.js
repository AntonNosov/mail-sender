'use strict'

const { Dao } = require('./Base'),
  MailDao = require('./MailDao')

module.exports = function (models, queuesHelper) {
  return {
    mail: new MailDao(models, 'Mail', queuesHelper),
  }
}
