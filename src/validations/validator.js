function validate(
  schema,
  data,
  options = { abortEarly: false, allowUnknown: false },
) {
  let hasError = false
  let errors = null

  const { error } = schema.validate(data, options)

  if (error) {
    hasError = true

    errors = error.details.reduce((result, detail) => {
      const { message, path } = detail

      result[path.join('.')] = message

      return result
    }, {})
  }

  return {
    hasError,
    errors,
  }
}

module.exports = {
  validate,
}
