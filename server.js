const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

// const api = require('./controllers/api')
const user = require('./users/usersController')
const product = require('./product/productsController')
const order = require('./orders/ordersController')
const auth = require('./controllers/auth')
const middleware = require('./utils/middleware')

const port = process.env.PORT || 1337
const app = express()

app.use(middleware.cors)
app.use(bodyParser.json())
app.use(cookieParser())

/**
 * app[method](route, middleware, routeHandler)
 */
app.post('/login', (req, res) => {
  auth.authenticate, auth.login
})
app.get('/products', product.listProduct)
app.get('/products/:id', product.getProduct)
app.post('/products', function (req, res) {
  return auth.ensureUser, product.createProduct
})
app.put('/products/:id', function (req, res) {
  auth.ensureUser, product.editProduct
})
app.delete('/products/:id', function (req, res) {
  auth.ensureUser, product.deleteProduct
})

app.get('/orders', function (req, res) {
  auth.ensureUser, order.listOrders
})
app.post('/orders', function (req, res) {
  auth.ensureUser, order.createOrder
})

app.post('/users', user.createUser )

app.use(middleware.handleError)
app.use(middleware.notFound)

app.listen(port, () => console.log(`Server berjalan di port ${port} 🚀`))
