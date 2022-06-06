const Joi = require('joi')

exports.createUserSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
  firstname: Joi.string().required(),
  lastname: Joi.string().required(),
})

exports.userLoginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
})
