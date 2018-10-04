const express = require('express')
const morgan = require('morgan')
const path = require('path')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
// Require configuration file defined in app/Config.js
const config = require('./db/Config')

// Connect to database
mongoose.connect(config.DB, { useNewUrlParser: true })

// Sends static files  from the public path directory
app.use(express.static(path.join(__dirname, '/')))

// Use morgan to log request in dev mode
app.use(morgan('dev'))

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: true}))

const port = config.APP_PORT || 4000

app.listen(port) // Listen on port defined in config file

console.log('App listening on port ' + port)

const eventRoutes = require('./db/routes.js')

//  Use routes defined in Route.js and prefix with todo
app.use('/api', eventRoutes)

app.use(function (req, res, next) {
    // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:' + port)

    // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')

    // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')

    // Pass to next layer of middleware
  next()
})
// Server index.html page when request to the root is made
app.get('/', function (req, res, next) {
  res.sendfile('/index.html')
})
