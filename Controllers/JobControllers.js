const Jobs = require('../Models/Jobs')
const {mutipleMongooseToObject, singleToObject} = require('../src/util/mongoose')

class JobControllers
{
   


  home(req, res, next) {
    Jobs.find()
      .then(Jobs=>{
        res.render('search/jobs',{Jobs: mutipleMongooseToObject(Jobs)});
      })
      .catch(next);
    }

    location(req, res, next) {
    Jobs.find({location: req.params.location})
      .then(Jobs=>{
        res.render('search/jobs',{Jobs: mutipleMongooseToObject(Jobs)});
      })
      .catch(next);
    }

    locationkeyword(req, res, next) {
      Jobs.find({keyword: req.params.keyword},{location: req.params.location})
        .then(Jobs=>{
          res.render('search/jobs',{Jobs: mutipleMongooseToObject(Jobs)});
        })
        .catch(next);
      }

    detail(req, res, next)
    {
      Jobs.findById({_id: req.params.id})
        .then(Job=>{
          res.render('search/detail',{Job: singleToObject(Job)});
        })
      
    }

    
    apply(req, res, next)
    {
      Jobs.findOne({_id: req.params.id})
        .then(Job => {
            res.render('search/apply',{Job: singleToObject(Job)});
        })
          
      
    }



}

module.exports = new JobControllers();