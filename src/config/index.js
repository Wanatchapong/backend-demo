module.exports = {
  server: {
    port: process.env.SERVER_PORT || 3000,
  },
  mongo: {
    uri: process.env.MONGO_URI || '',
    dbName: process.env.MONGO_DBNAME || '',
  },
  jwt: {
    secretKey: 'my_secret_key',
    expiresTime: 86400, // 24 hours
  },
}
