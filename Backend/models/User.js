const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,  // Yahi required validation issue create kar raha hai
    unique: true,
  },
  password: {
    type: String,
    required: true,
  }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
