'use strict'

const express = require('express'),
  bodyParser = require('body-parser'),
  cors = require('./middlewares/cors'),
  { UI } = require('bull-board')

const server = express()

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json({ limit: '50mb', extended: true }))

//CORS
server.use(cors)

server.use('/queues', UI)

module.exports = server
