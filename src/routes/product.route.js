const express = require('express')

const asyncHandler = require('../middlewares/async-handler.middleware')
const controller = require('../controllers/product.controller')

const router = express.Router()

router.get('/', asyncHandler(controller.getProductList))

router.get('/:id', asyncHandler(controller.getProductById))

router.post('/', asyncHandler(controller.createProduct))

router.put('/:id', asyncHandler(controller.updateProduct))

router.delete('/:id', asyncHandler(controller.deleteProduct))

module.exports = router
