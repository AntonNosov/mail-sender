'use strict'

class QueuesHelper {
  /**
   *
   * @param {Object} queue
   * @param {Object} queuesConfig
   */
  constructor(queue, queuesConfig) {
    this.queue = queue
    this.queuesConfig = queuesConfig
  }

  /**
   *
   * @param {Object} mail
   * @returns {Promise<void>}
   */
  async addMailToQueue(mail) {
    const data = {
      id: mail._id,
      destination: mail.destination,
      subject: mail.subject,
      text: mail.text
    }
    await this.queue.mailHelper.add('*', data, this.queuesConfig.mailHelper.options)
  }
}


module.exports = QueuesHelper
