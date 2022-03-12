const site = require('./site');
const search = require('./search');
const footer = require('./footer');
function route(app)
{

    app.use('/search',search);
    app.use('/footer',footer);
    app.use('/',site);
    
}


module.exports =route;