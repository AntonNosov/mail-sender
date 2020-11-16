'use strict'

const { Dao, DaoValidationError } = require('./Base')

class MailDao extends Dao {
  /**
   * @param {Object} models
   * @param {String} modelName
   * @param {Object} queuesHelper
   */
  constructor(models, modelName, queuesHelper) {
    super(models, modelName, queuesHelper)
  }

  /**
   *
   * @param {Object} data
   * @returns {Promise<Model<any, any>>}
   */
  async create(data) {
    const mail = await super.create(data)
    await this.queuesHelper.addMailToQueue(mail)
    return mail
  }
}

module.exports = MailDao
