const home = require('./home');
const search = require('./search');
const information = require('./information');
const user = require('./user');
const manager = require('./manager');
const auth = require('../../middlewares/auth.js');
const checkRole = require('../../middlewares/checkRole.js')


function route(app)
{
    app.use('/login',user);
    app.use('/search',auth,search);
    app.use('/information',auth,checkRole,information);
    app.use('/manager',auth,manager);
    app.use('/',auth ,home);
    
}


module.exports =route;