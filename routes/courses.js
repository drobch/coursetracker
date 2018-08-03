const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Course = require('../models/course');

router.get('/courses', (req, res, next) => {
  Course.getAll((err, courses) => {
    if(err) throw err;
    res.send(courses);
  })
});

router.get('/courses/:id', (req, res, next) => {
  Course.getCourseById(req.params.id, (err, course) => {
    if(err) throw err;
    res.send(course);
  })
});

router.post('/courses/add', (req, res, next) => {
  let newCourse = new Course({
    title: req.body.title,
    status: req.body.status
  });
  Course.addCourse(newCourse, (err, course) => {
    if (err) {
      res.json({success: false, msg: 'Failed to add a course'})
    } else {
      res.json({success: true, msg: 'Course added'});
    }
  })
});

module.exports = router;
