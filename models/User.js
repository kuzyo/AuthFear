const mongoose = require('mongoose')
const Schema = mongoose.Schema

module.exports = mongoose.model('User', new Schema({
  name: String,
  surname: String,
  email: String,
  password: String,
}))