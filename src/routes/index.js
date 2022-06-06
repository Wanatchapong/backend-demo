const productRoutes = require('./product.route')
const userRoutes = require('./user.route')

function initialRoutes(app) {
  app.use('/products', productRoutes)
  app.use('/users', userRoutes)
  // add more api routes here
}

module.exports = {
  initialRoutes,
}
