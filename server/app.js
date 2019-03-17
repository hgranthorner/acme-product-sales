const express = require('express')
const path = require('path')
const app = express()

const routes = require('./routes')

app.use(express.json())
app.use(express.static(path.join('client', 'dist')))
app.use('/api', routes.apiRoutes)

module.exports = app
