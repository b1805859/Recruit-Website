const jwt = require('jsonwebtoken')
const User = require('../Models/User')
const JWT = process.env.JWT_KEY;

const auth = async(req, res, next) => {
    
    try {
        var token = req.cookies.token
        var result = jwt.verify(token,'mk')
        if(result)
        {
            next()
        }
    } catch (error) {
        res.redirect('/login')
    }

}
module.exports = auth