import * as mongoose from 'mongoose';
import User from './user';
import Course from './course';

const userCoursesSchema = new mongoose.Schema({
  userId: [{
    type : mongoose.Schema.ObjectId,
    ref : 'User'
  }],
  courseId: [{
    type : mongoose.Schema.ObjectId,
    ref : 'Course'
  }]
});

const UserCourses = mongoose.model('Course', userCoursesSchema);

export default UserCourses;
