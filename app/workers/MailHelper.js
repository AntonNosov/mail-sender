'use strict'

const Worker = require('./Base'),
  initWorker = require('./initWorker')

class MailHelper extends Worker {
  async execute(job, done) {
    const mail = job.data
    try {
      await this.services.mailHelper.sendMail(mail)
    } catch(err) {
      console.error(err)
      return done(err)
    }
    done()
  }
}

initWorker(MailHelper, worker => {
  worker.listen('mailHelper')
})
