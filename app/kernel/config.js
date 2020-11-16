module.exports = {
  server: process.env.SERVER || '',
  serverPort: process.env.SERVER_PORT,
  indexRoute: '/api/1.0',
  mongoUrl: process.env.MONGO_URL,
  redis: {
      host: process.env.REDIS_HOST || '127.0.0.1',
      port: process.env.REDIS_PORT || 6379,
      password: process.env.REDIS_PASSWORD || null,
      queues: {
        mailHelper: {
          name: process.env.REDIS_MAIL_HELPER_QUEUE_NAME || 'mailHelper',
          options: {
            removeOnComplete: true,
            priority: 1,
            attempts: 1,
            timeout: 5 * 60 * 1000
          }
        }
      }
  }
}
