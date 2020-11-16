const routes = require('./routes.js'),
  HttpError = require('standard-http-error'),
  { DaoValidationError } = require('../services/dao/Base')

class Router {
  constructor(server, initObj) {
    this.server = server
    this.initObj = initObj
    this.config = this.initObj.config
  }

  /**
   * @returns {void}
   */
  addEventsListeners() {
    routes.forEach((route) => {
      let Controller = require('../controllers/' + route.controller)
      let controller = new Controller(this.initObj)
      route.path = (this.config.indexRoute || '') + route.path
      this.server[route.method](route.path, async (req, res, next) => {
        let result, error
        try {
          result = controller[route.action](req, res, next)
          await this._sendResponse(result, res)
        } catch (err) {
          error = this._handleError(err, res)
        }
      })
    })
  }

  /**
   * @param {any} actionResult
   * @param {Object} res
   * @returns {Promise<void>}
   * @private
   */
  async _sendResponse(actionResult, res) {
    if (typeof actionResult.then === 'function') {
      //is Promise
      actionResult = await actionResult
      if (!res.headersSent) res.send(actionResult)
    } else {
      if (!res.headersSent) res.send(actionResult)
    }
  }

  /**
   * @param {Error} err
   * @param {Object} res
   * @returns {{code: Number, message: String}}
   * @private
   */
  _handleError(err, res) {
    let code = 500
    let message = err.message
    if (err instanceof HttpError) {
      code = err.code
    } else if (err instanceof DaoValidationError) {
      code = 400
    }
    if (code === 500) {
      console.error(err);
    }
    res.status(code)
      .send({ error: message })
    return { code, message }
  }
}

module.exports = Router
