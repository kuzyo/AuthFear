const mongoose = require('mongoose')
const Schema = mongoose.Schema

module.exports = mongoose.model('User', new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
}))