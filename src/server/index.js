const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const session = require('koa-session');
const passport = require('koa-passport');

const indexRoutes = require('./routes/index');
const movieRoutes = require('./routes/movies');
const authRoutes = require('./routes/auth');
const store = require('./session');

const app = new Koa();
const PORT = process.env.PORT || 1337;

// sessions
app.keys = ['super-secret-key'];
app.use(session({ store }, app));

// body parser
app.use(bodyParser());

// authentication
require('./auth');
app.use(passport.initialize());
app.use(passport.session());

// routes
app.use(indexRoutes.routes());
app.use(movieRoutes.routes());
app.use(authRoutes.routes());

// server
const server = app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = server;
