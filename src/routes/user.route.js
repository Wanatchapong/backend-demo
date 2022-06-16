const express = require('express')

const asyncHandler = require('../middlewares/async-handler.middleware')
const validationHandler = require('../middlewares/validation.middleware')
const controller = require('../controllers/user.controller')
const {
  createUserSchema,
  updateUserSchema,
} = require('../validations/user.schema')

const router = express.Router()

router.get('/', asyncHandler(controller.getUserList))

router.get('/:id', asyncHandler(controller.getUserById))

router.post(
  '/',
  validationHandler(createUserSchema, 'body'),
  asyncHandler(controller.createUser),
)

router.put(
  '/:id',
  validationHandler(updateUserSchema, 'body'),
  asyncHandler(controller.updateUser),
)

router.delete('/:id', asyncHandler(controller.deleteUser))

module.exports = router
