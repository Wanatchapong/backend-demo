const { ErrorCodes } = require('../config/constants')
const {
  AuthenticationError,
  NotFoundError,
  RequestError,
  ValidationError,
} = require('../errors')

function errorHandler(err, req, res, next) {
  let status = 500
  let code = ErrorCodes.InternalError
  let message = err.message
  let details

  console.log(`${req.method} ${req.url} ERROR:`, err)

  if (err instanceof ValidationError) {
    status = err.status
    code = err.code
    message = err.message
    details = err.details
  } else if (
    err instanceof AuthenticationError ||
    err instanceof NotFoundError ||
    err instanceof RequestError
  ) {
    status = err.status
    code = err.code
    message = err.message
  }

  res.status(status).json({
    error: {
      code,
      message,
      details,
    },
  })
}

module.exports = errorHandler
