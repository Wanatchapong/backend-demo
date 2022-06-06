const prisma = require('../utils/prisma')

const getProductList = async () => {
  const products = await prisma.product.findMany()
  return products
}

const getProductById = async (id) => {
  const product = await prisma.product.findUnique({
    where: {
      id: id,
    },
  })
  return product
}

const createProduct = async (data) => {
  const product = await prisma.product.create({
    data: {
      sku: data.sku,
      name: data.name,
      price: data.price,
      categoryId: data.categoryId,
    },
  })
  return product
}

const updateProduct = async (id, data) => {
  const product = await prisma.product.update({
    where: {
      id: id,
    },
    data: {
      sku: data.sku,
      name: data.name,
      price: data.price,
      categoryId: data.categoryId,
    },
  })
  return product
}

const deleteProduct = async (id) => {
  await prisma.product.delete({
    where: {
      id: id,
    },
  })
}

module.exports = {
  getProductList,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
}
