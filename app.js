const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

mongoose.connect(config.database);

mongoose.connection.on('connected', () => {
 console.log('connected to db ' + config.database)
});

mongoose.connection.on('error', (error) => {
  console.log('error ' + error)
});

const app = express();
const port = 3000;
const users = require('./routes/users');
const courses = require('./routes/courses');
app.use(cors());

// Set Static folder
app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());


require('./config/passport')(passport);

app.use('/user', users);
app.use('/', courses);

app.listen(port, () => {
  console.log("running on port 3000");
})
