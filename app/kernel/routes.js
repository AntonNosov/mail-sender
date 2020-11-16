'use strict'

const routes = [
  // Main ping
  {
    path: '/ping',
    method: 'get',
    controller: 'Main',
    action: 'ping'
  },
  {
    path: '/mail',
    method: 'post',
    controller: 'Mail',
    action: 'create'
  }
]

// Main not found
routes.push({
  path: '*',
  method: 'all',
  controller: 'Main',
  action: 'notFound'
})

module.exports = routes
