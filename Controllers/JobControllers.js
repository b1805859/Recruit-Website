var nodemailer =  require('nodemailer');
const Jobs = require('../Models/Jobs')
const {mutipleMongooseToObject, singleToObject} = require('../src/util/mongoose')

class JobControllers
{
   


  home(req, res, next) {
    Jobs.find()
      .then(Jobs=>{
        res.render('search/jobs',{Jobs: mutipleMongooseToObject(Jobs),username: req.user.name});
      })
      .catch(next);
    }

    location(req, res, next) {
    Jobs.find({location: req.params.location})
      .then(Jobs=>{
        res.render('search/jobs',{Jobs: mutipleMongooseToObject(Jobs),username: req.user.name});
      })
      .catch(next);
    }

    locationkeyword(req, res, next) {
      Jobs.find({keyword: req.params.keyword , location: req.params.location})
        .then(Jobs=>{
          res.render('search/jobs',{Jobs: mutipleMongooseToObject(Jobs),username: req.user.name});
        })
        .catch(next);
      }

    detail(req, res, next)
    {
      Jobs.findById({_id: req.params.id})
        .then(Job=>{
          res.render('search/detail',{Job: singleToObject(Job),username: req.user.name});
        })
      
    }

    
    apply(req, res, next)
    {
      Jobs.findOne({_id: req.params.id})
        .then(Job => {
            res.render('search/apply',{Job: singleToObject(Job),username: req.user.name});
        })

          
      
    }

    applied(req,res)
    {
      
    }



    post(req, res)
    {
      res.render('search/post',{username: req.user.name});
    }


    stored(req, res)
    {
      const job = req.body
      const jobs = new Jobs(job);
      jobs.save()
      res.redirect("/search/jobs");
    }


}

module.exports = new JobControllers();