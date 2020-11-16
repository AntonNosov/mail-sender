'use strict'

const gmailApi = require('./GmailApi')

class MailHelper {
  /**
   *
   * @param {Object} config
   * @param {Object} models
   */
  constructor(config, models) {
    this.config = config
    this.models = models
  }

  /**
   *
   * @param {Object} mail
   * @returns {Promise<void>}
   */
  async sendMail(mail) {
    mail = await this.models.Mail.findById(mail.id)
    await gmailApi.sendMail(mail)
    await mail.set({ sent: true }).save()
  }
}

module.exports = MailHelper
