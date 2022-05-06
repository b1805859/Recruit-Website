
var jwt = require('jsonwebtoken');
const User = require('../Models/User')
const Job = require('../Models/Jobs')
const {mutipleMongooseToObject} = require('../src/util/mongoose.js')

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
                        res.redirect('/')
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
            User.findOne({email: req.body.email})
            .then(data =>{
                if(data==null)
                {
                    const user = new User(req.body)
                    user.role='0'
                    user.save()
                    res.redirect('/login')
                }
                else
                {
                    res.json("Tai khoan da ton tai");
                }
            })
            
            
        } catch (error) {
            res.status(400).send(error)
        }
    }

    


 

  


}

module.exports = new UserControllers();