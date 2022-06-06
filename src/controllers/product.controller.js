const productService = require('../services/product.service')

const getProductList = async (req, res) => {
  const products = await productService.getProductList()

  res.json({
    message: 'get product list',
    data: products,
  })
}

const getProductById = async (req, res) => {
  const id = req.params.id

  const product = await productService.getProductById(id)

  res.json({
    message: `get product by id: ${id}`,
    data: product,
  })
}

const createProduct = async (req, res) => {
  const body = req.body

  const product = await productService.createProduct(body)

  res.json({
    message: `created product`,
    data: product,
  })
}

const updateProduct = async (req, res) => {
  const id = req.params.id
  const body = req.body

  const product = await productService.updateProduct(parseInt(id), body)

  res.json({
    message: `updated product by id: ${id}`,
    data: product,
  })
}

const deleteProduct = async (req, res) => {
  const id = req.params.id

  await productService.deleteProduct(parseInt(id))

  res.json({
    message: `deleted product by id: ${id}`,
  })
}

module.exports = {
  getProductList,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
}
