const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
  },
  {
    collection: 'users',
    timestamps: {
      createdAt: 'created_date',
      updatedAt: 'updated_date',
    },
    versionKey: false,
    skipVersioning: {
      dontVersionMe: true,
    },
  },
)

module.exports = mongoose.model('User', userSchema)
