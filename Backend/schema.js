const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  dob: String,
  occupation: String,
  phone: String,
  password: String
});

const User = mongoose.model('stockuser-collection', userSchema);     

module.exports = {User};
