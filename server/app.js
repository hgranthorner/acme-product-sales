const express = require('express')
const path = require('path')
const morgan = require('morgan')
const app = express()

const routes = require('./routes')

app.use(express.json())
app.use(morgan('dev'))
app.use(express.static(path.join('client', 'dist')))
app.use('/api', routes.apiRoutes)

module.exports = app
