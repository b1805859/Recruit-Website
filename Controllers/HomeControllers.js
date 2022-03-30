const {mutipleMongooseToObject, singleToObject} = require('../src/util/mongoose.js')
const Job = require('../Models/Jobs');
class HomeControllers
{
    home(req, res)
    {
      res.render('home',{username: req.user.name});
       
    }

    logout(req, res)
    {
        res.clearCookie("token");
        res.redirect('/');
        res.end();
    }

    manager(req, res)
    {
        
          
              Job.find({id_user: req.user._id})
                  .then(data =>{
                      res.render('user/user_post',{Jobs: mutipleMongooseToObject(data)})
                  })
         
      
    }
    async delete_post(req, res)
    {
        await Job.deleteOne({ _id: req.params.id })
            .then(data =>{
                res.redirect('/user_post');

            })
    }


    async edit_post_page(req, res)
    {
        await Job.findOne({_id: req.params.id})
            .then(data =>{
                 res.render('user/edit_post',{Job: singleToObject(data)});
                
            })
    }


    async edit_post(req, res)
    {
        
        await Job.updateOne({_id: req.params.id},req.body)
               .then(data => res.redirect('/user_post'))
       
              
    }
}

module.exports = new HomeControllers();