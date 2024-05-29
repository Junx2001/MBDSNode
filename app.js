require('dotenv').config();

var express = require('express');
var logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

var app = express();

app.use(cors());

var usersRouter = require('./src/routes/users/user.routes');
var assignmentsRouter = require('./src/routes/assignments/assignment.routes');
var subjectsRouter = require('./src/routes/subjects/subject.routes');
var formatter = require('./src/services/json-formatter-service');


app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const constantsUrl = require('./src/constants/Url');
// Routes list
app.use(constantsUrl.HEALTH_STATUS, (req, res) => {
  res.status(200).json(formatter.formatJsonRespoonse(true, "Server is running", 200, {
    status: "No worry, our servers are running fine.",
    actual_time: new Date().toISOString(),
    server: "Node.js",
    host_adress: req.hostname,
    app_port: process.env.PORT,
    app_name: "Assignment Management System",
  }));
});
app.use(constantsUrl.USER_ROUTE, usersRouter);
app.use(constantsUrl.ASSIGNMENT_ROUTE, assignmentsRouter);
app.use(constantsUrl.SUBJECT_ROUTE, subjectsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(500).json(formatter.formatJsonRespoonse(false,"No such route exists", 404, {}));
});

// error handler
app.use(function(err, req, res, next) {
  res.status(500).json(formatter.formatJsonRespoonse(false,"Error Message", 500, {}));
});

module.exports = app;