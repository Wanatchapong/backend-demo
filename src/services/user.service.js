const { Types } = require('mongoose')
const bcrypt = require('bcryptjs')

const User = require('../models/user.model')

const DefaultSaltRounds = 10

async function getUserList(query) {
  const users = await User.find({}, { password: 0 })
  return users
}

async function getUserById(id) {
  const user = await User.findOne({ _id: Types.ObjectId(id) }, { password: 0 })
  return user
}

async function createUser(data) {
  console.log('create user data :', data)

  data.password = await bcrypt.hash(data.password, DefaultSaltRounds)

  const user = await User.create(data)
  delete user.password
  console.log('user ----->', user)

  return user
}

async function updateUser(id, data) {
  console.log('update user by id :', id, ', data :', data)

  const user = await User.findOneAndUpdate(
    {
      _id: Types.ObjectId(id),
    },
    {
      $set: {
        firstname: data.firstname,
        lastname: data.lastname,
      },
    },
    {
      lean: true,
      new: true,
      fields: { password: 0 },
    },
  )

  return user
}

async function deleteUser(id) {
  await User.deleteOne({
    _id: Types.ObjectId(id),
  })
}

module.exports = {
  getUserList,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
}
