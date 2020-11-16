'use strict'

const initServer = require('./kernel/initServer'),
  init = require('./kernel/init');

(async function () {
  const initObj = await init()
  const server = initServer(initObj)
  server.listen(initObj.config.serverPort, () => {
    console.log('Server listening on port ' + initObj.config.serverPort)
  })
})()
