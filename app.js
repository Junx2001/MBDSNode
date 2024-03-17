require('dotenv').config();

var express = require('express');
var logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

var usersRouter = require('./src/routes/users/user.routes');

var app = express();

app.use(cors());

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const constantsUrl = require('./src/constants/Url');
// Routes list
app.use(constantsUrl.USER_ROUTE, usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(404).json({
    message: "No such route exists"
  })
});

// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500).json({
    message: "Error Message"
  })
});

module.exports = app;