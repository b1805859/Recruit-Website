const home = require('./home');
const search = require('./search');
const information = require('./information');
const user = require('./user');
const auth = require('../../middlewares/auth.js');



function route(app)
{
    app.use('/',user);
    app.use('/search',auth,search);
    app.use('/information',auth,information);
    app.use('/home',auth,home);
    
}


module.exports =route;