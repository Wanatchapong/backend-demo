const Jwt = require('jsonwebtoken')

const config = require('../config')
const { ErrorCodes } = require('../config/constants')
const { AuthenticationError } = require('../errors')

function sign(payload) {
  const { secretKey, expiresTime } = config.jwt
  const token = Jwt.sign(payload, secretKey, {
    expiresIn: expiresTime,
  })
  return token
}

function verify(token) {
  const { secretKey } = config.jwt
  try {
    const decoded = Jwt.verify(token, secretKey)
    return decoded
  } catch (err) {
    throw new AuthenticationError(ErrorCodes.TokenError, err.message)
  }
}

module.exports = {
  sign,
  verify,
}
