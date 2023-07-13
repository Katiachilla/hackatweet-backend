const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name : String,
  username: String,
  password: String,
  token: String,
  canRemove: Boolean,
  tweets : {
  date : Date,
  message : String,}
});

const User = mongoose.model('users', userSchema);

module.exports = User;