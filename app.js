const express = require('express')
const path = require('path')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')


const app = express()

// globals
global.r = require('rethinkdb')
global.Promise = require('bluebird')
global._ = require('lodash')
global.nconf = require('nconf')
global.rp = require('request-promise')
global.promiseWriteFile = Promise.promisify(require('fs').writeFile)
global.queryString = require('query-string')
global.moment = require('moment')
global.session = require('express-session')
global.uuid = require('uuid/v4')



const routes = require('./routes/index')


// uncomment after placing your favicon in /public
// app.use(favicon(__dirname + '/public/favicon.ico'))
app.use(logger('dev'))
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.use('/', routes)





module.exports = app
