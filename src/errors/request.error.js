class RequestError extends Error {
  constructor(code, message) {
    super(message)
    Error.captureStackTrace(this, this.constructor)
    this.name = this.constructor.name
    this.status = 400
    this.code = code
  }
}

module.exports = RequestError
