require('dotenv').config();

var express = require('express');
var logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

var usersRouter = require('./src/routes/users/user.routes');
var assignmentsRouter = require('./src/routes/assignments/assignment.routes');
var formatter = require('./src/services/json-formatter-service');


var app = express();

app.use(cors());

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const constantsUrl = require('./src/constants/Url');
// Routes list
app.use(constantsUrl.USER_ROUTE, usersRouter);
app.use(constantsUrl.ASSIGNMENT_ROUTE, assignmentsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {


  res.status(500).json(formatter.formatJsonRespoonse(false,"No such route exists", 404, {}));
});

// error handler
app.use(function(err, req, res, next) {
  res.status(500).json(formatter.formatJsonRespoonse(false,"Error Message", 500, {}));
});

module.exports = app;