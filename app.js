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

mongoose.connection.on('eroor', (error) => {
  console.log('error ' + error)
});

const app = express();
const port = 3000;
const users = require('./routes/users');
app.use(cors());

// Set Static folder
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());



app.use('/users', users)
app.listen(port, () => {
  console.log("running on port 3000");
})
