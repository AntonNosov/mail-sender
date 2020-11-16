'use strict'

const { google } = require('googleapis'),
  { authenticate } = require('@google-cloud/local-auth'),
  gmail = google.gmail('v1'),
  path = require('path')

class GmailApi {
  /**
   *
   * @returns {string[]}
   * @constructor
   */
  static get SCOPES() {
    return [
      'https://www.googleapis.com/auth/gmail.send'
    ]
  }

  /**
   *
   * @param {Object} mail
   * @returns {Promise<*>}
   */
  static async sendMail(mail) {
    const auth = await authenticate({
      keyfilePath: path.join(__dirname, './google-credentials.json'),
      scopes: GmailApi.SCOPES,
    })
    google.options({ auth })
    const preparedMail = GmailApi._prepareMail(mail)
    return gmail.users.messages.send({
      auth: auth,
      userId: 'me',
      requestBody: {
        raw: preparedMail
      }
    })
  }

  /**
   *
   * @param {Object} mail
   * @returns {string}
   * @private
   */
  static _prepareMail(mail) {
    const utf8Subject = `=?utf-8?B?${ Buffer.from(mail.subject).toString('base64') }?=`
    const message = [
      `To: ${ mail.destination }`,
      'Content-Type: text/html; charset=utf-8',
      'MIME-Version: 1.0',
      `Subject: ${ utf8Subject }`,
      '',
      mail.text,
    ].join('\n')
    return Buffer.from(message)
      .toString('base64')
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '')
  }
}

module.exports = GmailApi
