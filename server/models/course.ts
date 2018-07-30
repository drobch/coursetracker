import * as mongoose from 'mongoose';
import userCoursesSchema from './userCourses';

const courseSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: {
    type: String,
    required: true
  },
  status: {
    type: Boolean,
    default: false
  },
  progress: {
    type: Number,
    default: 0,
    min: 0,
    max: 100
  },
  users: [ userCoursesSchema ],
  recommendations: [ this ],
  lastUpdate:  {
    type: Date,
    default: Date.now
  }
});

const Course = mongoose.model('Course', courseSchema);

export default Course;

