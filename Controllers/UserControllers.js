
var jwt = require('jsonwebtoken');
const User = require('../Models/User')


class UserControllers
{
    login(req, res)
    {
        res.render('login');
    }

    logined(req, res)
    {

            
            User.findOne({email: req.body.email, password: req.body.password})
                .then(data =>{
                    if(data)
                    {
                        var token = jwt.sign({_id : data._id},"mk")
                        res.cookie('token', token)
                        res.redirect('/home')
                    }
                    else
                    {
                        return res.json('that bai')
                    }
                })
                .catch(err => {
                    console.log(err)
                    res.status(500).json('loi server')
                })
            
 
    }

    register(req, res){
        res.render('register');
    }

    registered(req, res){
        
        try {
            const user = new User(req.body)
            user.save()
            
        } catch (error) {
            res.status(400).send(error)
        }
    }


}

module.exports = new UserControllers();