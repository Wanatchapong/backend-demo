const { ErrorCodes } = require('../config/constants')

class NotFoundError extends Error {
  constructor(message) {
    super(message)
    Error.captureStackTrace(this, this.constructor)
    this.name = this.constructor.name
    this.status = 404
    this.code = ErrorCodes.NotFound
  }
}

module.exports = NotFoundError
