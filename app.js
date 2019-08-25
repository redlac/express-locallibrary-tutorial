var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mysql = require("mysql");
require("dotenv").config({path: "./.env"});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var createDBTables = require('./createDBTables');
var app = express();

//connect to DB
var connection = mysql.createConnection(
{
 host: process.env.DATABASE_HOST,
 user: process.env.DATABASE_USER,
 password: process.env.DATABASE_PASSWORD,
 database: process.env.DATABASE_NAME 
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//set up other middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//set up Routers
app.use('/', indexRouter);
app.use('/users', usersRouter);

//create DB tables if they don't exist

connection.query(createDBTables.createBookTable, (err, result) => {
                if (err) throw err;
            });
connection.query(createDBTables.createAuthorTable, (err, result) => {
                if (err) throw err;
            });
connection.query(createDBTables.createBookInstanceTable, (err, result) => {
                if (err) throw err;
            });
connection.query(createDBTables.createGenreTable, (err, result) => {
                if (err) throw err;
            });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('pages/error');
});

module.exports = app;
