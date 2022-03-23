const jwt = require('jsonwebtoken')
const User = require('../Models/User')
const JWT = process.env.JWT_KEY;

const auth = async(req, res, next) => {
    
    try {
        var token = req.cookies.token
        var result = jwt.verify(token,'mk')

        const user = await User.findOne({_id: result._id});

        if(user)
        {
            req.user = user
            req.token = token
            next()
        }
    } catch (error) {
        res.redirect('/login')
    }

}
module.exports = auth