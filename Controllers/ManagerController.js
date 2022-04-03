const Job = require('../Models/Jobs.js')
const {mutipleMongooseToObject, singleToObject} = require('../src/util/mongoose.js')
class ManagerControllers
{
    async manager_page(req, res) {

         await Job.find({})
                .then(data =>{
                    res.render('user/manager_post',{Jobs: mutipleMongooseToObject(data)});
                })
    
       
    }
    

    async manager_delete_post(req, res)
    {
        await Job.deleteOne({ _id: req.params.id })
            .then(data =>{
                res.redirect('/manager');

            })
    }

    manager_edit_post(req, res)
    {
         Job.updateOne({_id: req.params.id},req.body)
               .then(data => res.redirect('/manager'))
    }

    async manager_edit_post_page(req, res)
    {
        await Job.findOne({_id: req.params.id})
            .then(data =>{
                 res.render('manager/edit',{Job: singleToObject(data)});
                
            })
    }

    async manager_read_post(req, res)
    {
           await Job.findById({_id: req.params.id})
                    .then(Job=>{
                    res.render('manager/detail',{Job: singleToObject(Job),username: req.user.name});
                    })
    }


    async search_jobs(req,res, next){

        return req.body.keyword ?
            ( 
               await Job.find({keyword:{ $regex: '.*' + `${req.body.keyword}`+ '.*',$options: 'i'}, location:req.body.location})
                        .then(Job=>{
                            res.render('user/manager_post',{Jobs: mutipleMongooseToObject(Job),username: req.user.name});
                        })
                        .catch(next)
        
            ) : 
            (
                await Job.find({ location:req.body.location})
                        .then(Job=>{
                            res.render('user/manager_post',{Jobs: mutipleMongooseToObject(Job),username: req.user.name});
                        })
                        .catch(next)
            )

    }

    
}

module.exports = new ManagerControllers();