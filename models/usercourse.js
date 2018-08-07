const mongoose = require("mongoose");

var userCourses = new mongoose.Schema({
  idUser: {
    type: String,
    required: true
  },
  idCourse: {
    type: String,
    required: true,
  },
  progress: {
    type: Number,
    "default": 0,
    min: 0,
    max: 100
  }
});

const UserCourses = module.exports = mongoose.model('UserCourses', userCourses);

module.exports.getCoursesByUserId = function (idUser, cb) {

  UserCourses.find({}, cb)
  .where('id_user').equals(idUser).select('id_course progress').exec(cb);
};
