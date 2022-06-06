const mongoose = require('mongoose')
const config = require('../config')

mongoose.connection.on('connected', () => {
  console.log('mongodb connected')
})

mongoose.connection.on('disconnected', () => {
  console.log('mongodb disconnected')
})

mongoose.connection.on('error', (err) => {
  console.log('mongodb error:', err)
})

exports.connect = () => {
  const { uri, dbName } = config.mongo

  return mongoose.connect(uri, {
    dbName: dbName,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
}
