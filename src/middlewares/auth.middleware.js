const { ErrorCodes } = require('../config/constants')
const { AuthenticationError } = require('../errors')
const jwt = require('../utils/jwt')

function authHandler(req, res, next) {
  if (!req.headers.authorization) {
    throw new AuthenticationError(
      ErrorCodes.TokenError,
      'Authorization header is not present',
    )
  }

  const [scheme, token] = req.headers.authorization.split(' ')
  if (scheme !== 'Bearer') {
    throw new AuthenticationError(ErrorCodes.TokenError, 'Invalid bearer token')
  }

  try {
    const { uid } = jwt.verify(token)
    req.userId = uid
  } catch (err) {
    throw err
  }

  next()
}

module.exports = authHandler
