class AuthenticationError extends Error {
  constructor(code, message) {
    super(message)
    Error.captureStackTrace(this, this.constructor)
    this.name = this.constructor.name
    this.status = 401
    this.code = code
  }
}

module.exports = AuthenticationError
