const home = require('./home');
const search = require('./search');
const information = require('./information');
const user = require('./user');
const auth = require('../../middlewares/auth.js');
const checkRole = require('../../middlewares/checkRole.js')


function route(app)
{
    app.use('/login',user);
    app.use('/search',auth,checkRole,search);
    app.use('/information',auth,checkRole,information);
    app.use('/',auth, checkRole ,home);
    
}


module.exports =route;