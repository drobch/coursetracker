const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const config = require('../config/database');

var courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  status: {
    type: Boolean,
    "default": false
  },
  progress: {
    type: Number,
    "default": 0,
    min: 0,
    max: 100
  },
  lastUpdate: {
    type: Date,
    "default": Date.now
  }
});

const Course = module.exports = mongoose.model('Course', courseSchema);

module.exports.getCourseById = function (id, cb) {
  Course.findById(id, cb)
};


module.exports.getAll = function (cb) {
  Course.find({}, cb);
};

module.exports.addCourse = function (newCourse, cb) {
  newCourse.save(cb)
};
