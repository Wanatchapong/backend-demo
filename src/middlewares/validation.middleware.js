const validator = require('../validations/validator')
const ValidationError = require('../errors/validation.error')
/**
 * Validate the request
 * @param {object} schema joi schema
 * @param {string} key request property "params", "body", "query"
 */
function validationHandler(schema, key) {
  return (req, res, next) => {
    const { hasError, errors } = validator.validate(schema, req[key])

    if (hasError) {
      throw new ValidationError(`request ${key} validation failed`, errors)
    }

    next()
  }
}

module.exports = validationHandler
