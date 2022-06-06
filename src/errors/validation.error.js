const { ErrorCodes } = require('../config/constants')

class ValidationError extends Error {
  constructor(message, details) {
    super(message)
    Error.captureStackTrace(this, this.constructor)
    this.name = this.constructor.name
    this.status = 400
    this.code = ErrorCodes.ValidationFailure
    this.details = details
  }
}

module.exports = ValidationError
