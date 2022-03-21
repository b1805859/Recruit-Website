const home = require('./home');
const search = require('./search');
const information = require('./information');
const user = require('./user');
// var auth = require('../../middlewares/auth.js');


function route(app)
{
    app.use('/',user);
    app.use('/search',search);
    app.use('/information',information);
    app.use('/home',home);
    
}


module.exports =route;