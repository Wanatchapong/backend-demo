const express = require('express')

const routes = require('./routes')
const errorHandler = require('./middlewares/error.middleware')
const notFoundHandler = require('./middlewares/not-found.middleware')

const app = express()
app.use(express.json())
app.use(
  express.urlencoded({
    extended: false,
  }),
)
// add more middleware here

routes.initialRoutes(app)

app.use(errorHandler)
app.use(notFoundHandler)

module.exports = app
