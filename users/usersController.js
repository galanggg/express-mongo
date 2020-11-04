const Users = require('../users/users')
const autoCatch = require('../utils/auto-catch')

module.exports = autoCatch({
  createUser
})

async function createUser(req, res, next) {
  const user = await Users.create(req.body)
  const { username, email } = user
  res.json({ username, email })
}