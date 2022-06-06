const { ErrorCodes } = require('../config/constants')

function notFoundHandler(req, res, next) {
  res.status(404).json({
    error: {
      code: ErrorCodes.NotFound,
      message: `the requested [${req.method}] ${req.originalUrl} was not found`,
    },
  })
}

module.exports = notFoundHandler
