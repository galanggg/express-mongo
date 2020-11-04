const Products = require('../product/products')
const autoCatch = require('../utils/auto-catch')

module.exports = autoCatch({
  getProduct,
  listProduct,
  createProduct,
  editProduct,
  deleteProduct
})

async function getProduct(req, res, next) {
  const { id } = req.params

  const product = await Products.get(id)
  if (!product) return next()

  res.json(product)
}

async function listProduct(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  const { offset = 0, limit = 25 } = req.query

  const products = await Products.list({
    offset: Number(offset),
    limit: Number(limit),
  })
  res.json(products)
}

async function createProduct(req, res, next) {
  const product = await Products.create(req.body)
  res.json(product)
}

async function editProduct(req, res, next) {
  const change = req.body
  const product = await Products.edit(req.params.id, change)

  res.json(product)
}

async function deleteProduct(req, res, next) {
  await Products.remove(req.params.id)
  res.json({ success: true })
}