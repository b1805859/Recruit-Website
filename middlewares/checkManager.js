const jwt = require('jsonwebtoken')


const checkManager =  async (req, res, next) =>{

    try{

        if(req.user.role == "1")
        {
            next()
        }
        else
        {
            
             res.redirect('/');
        }

    }catch
    {

    }

}

module.exports = checkManager