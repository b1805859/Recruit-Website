const home = require('./home');
const search = require('./search');
const information = require('./information');
const user = require('./user');
const manager = require('./manager');
const auth = require('../../middlewares/auth.js');
const checkUser = require('../../middlewares/checkUser.js');
const checkManager = require('../../middlewares/checkManager.js');

function route(app) {
  app.use('/login', user);
  app.use('/search', auth, search);
  app.use('/manager', auth, checkManager, manager);
  app.use('/', auth, home);
}

module.exports = route;
