var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


//******************************************************

const userController = require('./controllers/user.controller')
const profileController = require('./controllers/profile.controller')
const followController = require('./controllers/follow.controller')
const postController = require('./controllers/post.controller')
const followingPostController = require('./controllers/followingpost.controller')

// *****************************************************

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// ***************************************************************************

app.use('/api/get-user',profileController)
app.use('/api/create-user/',userController)
app.use('/api/follow',followController)
app.use('/api/create-post/:username',postController)
app.use('/api/all-posts/:usernameA',followingPostController)

// ***************************************************************************

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
  res.render('error');
});

module.exports = app;
