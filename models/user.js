const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const config = require('../config/database');


const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  }
});

const User = module.exports = mongoose.model('User', userSchema);


module.exports.getUserById = function (id, cb) {
  User.findById(id, cb)
}

module.exports.getUserByUsername = function (username, cb) {
  const query = { username: username };
  User.findOne(query, cb)
}

module.exports.addUser = function (newUser, cb) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (error, hash) => {
      if (error) {
        throw error;
      }

      newUser.password = hash;
      newUser.save(cb);
    });
  });
}

module.exports.comparePassword = function (candidatePassword, hash, cb) {
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if(err)
      throw err;

    cb(null, isMatch);
  })
}
