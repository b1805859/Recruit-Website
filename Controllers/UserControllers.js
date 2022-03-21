
var jwt = require('jsonwebtoken');

const User = require('../Models/User')


class UserControllers
{
    login(req, res)
    {
        res.render('login');
    }

    async logined(req, res)
    {
        

        try {
            const { email, password } = req.body
            const user = await User.findByCredentials(email, password)
            if (!user) {
                return res.status(401).send({error: 'Login failed! Check authentication credentials'})
            }
            const token = await user.generateAuthToken()
            res.send({ user, token })
        } catch (error) {
            res.status(400).send(error)
        }
            
            
        
    }

    register(req, res){
        res.render('register');
    }

    async registered(req, res){
        
        try {
            const user = new User(req.body)
            await user.save()
            const token = await user.generateAuthToken()
            res.status(201).send({ user, token })
        } catch (error) {
            res.status(400).send(error)
        }
    }


}

module.exports = new UserControllers();