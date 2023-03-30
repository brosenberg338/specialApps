var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

let recipesRouter = require('./routes/recipes');
let formRouter = require('./routes/addRecipe.js');
let deleteRouter = require('./routes/delete.js');
var allergiesRouter = require('./routes/allergies.js');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/allergies', allergiesRouter);
app.use('/recipes', recipesRouter);
app.use('/addRecipe', formRouter);
app.use('/delete', deleteRouter);
app.use(function (req, res, next) {
  res.redirect('/allergies');
        
});        
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'recipes',
  password: 'test123',
  database: 'recipes'
});

connection.connect();

connection.query('SELECT *  FROM recipe', function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});

global.connection = connection;

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
