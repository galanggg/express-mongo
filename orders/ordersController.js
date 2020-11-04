const Orders = require('../orders/orders')
const autoCatch = require('../utils/auto-catch')

module.exports = autoCatch({
  createOrder,
  listOrders
})

async function createOrder(req, res, next) {
  const order = await Orders.create(req.body)
  res.json(order)
}

async function listOrders(req, res, next) {
  const { offset = 0, limit = 25, productId, status } = req.query

  const orders = await Orders.list({
    offset: Number(offset),
    limit: Number(limit),
    productId,
    status,
  })

  res.json(orders)
}