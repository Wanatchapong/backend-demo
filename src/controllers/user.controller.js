const userService = require('../services/user.service')

const getUserList = async (req, res) => {
  const users = await userService.getUserList()

  res.json({
    message: 'get user list',
    data: users,
  })
}

const getUserById = async (req, res) => {
  const id = req.params.id

  const user = await userService.getUserById(id)

  res.json({
    message: `get user by id: ${id}`,
    data: user,
  })
}

const createUser = async (req, res) => {
  const body = req.body

  const user = await userService.createUser(body)

  res.json({
    message: `created user`,
    data: user,
  })
}

const updateUser = async (req, res) => {
  const id = req.params.id
  const body = req.body

  const user = await userService.updateUser(id, body)

  res.json({
    message: `updated user by id: ${id}`,
    data: user,
  })
}

const deleteUser = async (req, res) => {
  const id = req.params.id

  await userService.deleteUser(id)

  res.json({
    message: `deleted user by id: ${id}`,
  })
}

module.exports = {
  getUserList,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
}
