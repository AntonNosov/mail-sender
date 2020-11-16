'use strict'

class DaoValidationError extends Error {
}

class Dao {
  /**
   * @param {Object} models
   * @param {String} modelName
   * @param {Object} queuesHelper
   */
  constructor(models, modelName, queuesHelper) {
    this.models = models
    this.modelName = modelName
    this.queuesHelper = queuesHelper
  }

  get model() {
    return this.models[this.modelName]
  }

  /**
   * @param {Object} data for create
   * @returns {Promise<Model>}
   */
  create(data) {
    const modelObj = new this.model(data)
    return modelObj.save()
  }
}

module.exports = { Dao, DaoValidationError }
