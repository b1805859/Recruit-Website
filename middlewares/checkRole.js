const jwt = require('jsonwebtoken')


const checkRole =  async (req, res, next) =>{

    try{

        if(req.user.role == "0")
        {
            next()
        }
        else
        {
            
             res.redirect('/manager/');
        }

    }catch
    {

    }

}

module.exports = checkRole