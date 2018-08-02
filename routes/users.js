const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('passport');
const User = require('../models/user');

router.post('/register', (req, res, next) => {
  let newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  });
  User.addUser(newUser, (err, user) => {
    if(err) {
      res.json({success: false, msg: 'Failed to register user'})
    } else {
      res.json({success: true, msg: 'User registered'});
    }
  })
});

router.post('/login', (req, res, next) => {
  res.send('login')
});

router.get('/account', (req, res, next) => {
  res.send('account')
});

router.get('/courses', (req, res, next) => {
  Course.getAll((err, user) => {
    if(err) {
      res.json({success: false, msg: 'Failed to get courses'})
    } else {
      res.json({success: true});
    }
  })
});

module.exports = router;
