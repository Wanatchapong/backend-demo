require('dotenv').config()

const app = require('./app')
const prisma = require('./utils/prisma')
const mongo = require('./utils/mongo')
const config = require('./config')

const port = config.server.port

async function startServer() {
  try {
    // connect mysql
    await prisma.$connect()
    console.log('database connected')

    // connect mongo
    await mongo.connect()

    app.listen(port, () => {
      console.log(`server started on port ${port}`)
    })
  } catch (err) {
    console.log('ERROR:', err)
    process.exit(0)
  }
}

startServer()
