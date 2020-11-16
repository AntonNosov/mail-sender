const env = {
  SERVER: 'http://localhost:8080',
  SERVER_PORT: 8080,
  MONGO_URL: 'mongodb://localhost/mail-sender',
  REDIS_MAIL_HELPER_QUEUE_NAME: 'mailHelper'
}

module.exports = {
  apps: [
    {
      name: 'mail-sender',
      script: 'index.js',
      watch: true,
      ignore_watch: [ 'node_modules', '.git' ],
      node_args: [ '--inspect' ],
      env
    },
    {
      name: 'mail-helper-worker',
      script: 'app/workers/MailHelper.js',
      watch: true,
      ignore_watch: [ 'node_modules', '.git' ],
      instances: 1,
      exec_mode: 'fork',
      env
    }
  ]
}
