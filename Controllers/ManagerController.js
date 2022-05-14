const Job = require('../Models/Jobs.js');
const {
  mutipleMongooseToObject,
  mutipleMongooseToObjectApprove,
  singleToObject,
} = require('../src/util/mongoose.js');
class ManagerControllers {
  async manager_page(req, res) {
    await Job.find({}).then((data) => {
      res.render('user/manager_post', { Jobs: mutipleMongooseToObject(data) });
    });
  }

  async manager_delete_post(req, res) {
    await Job.deleteOne({ _id: req.params.id }).then((data) => {
      res.redirect('/manager');
    });
  }

  manager_edit_post(req, res) {
    Job.updateOne({ _id: req.params.id }, req.body).then((data) =>
      res.redirect('/manager')
    );
  }

  async manager_edit_post_page(req, res) {
    await Job.findOne({ _id: req.params.id }).then((data) => {
      res.render('manager/edit', { Job: singleToObject(data) });
    });
  }

  async manager_read_post(req, res) {
    await Job.findById({ _id: req.params.id }).then((Job) => {
      res.render('manager/detail', {
        Job: singleToObject(Job),
        username: req.user.name,
      });
    });
  }

  async search_jobs(req, res, next) {
    return req.body.keyword
      ? await Job.find({
          keyword: {
            $regex: '.*' + `${req.body.keyword}` + '.*',
            $options: 'i',
          },
          location: req.body.location,
        })
          .then((Job) => {
            res.render('user/manager_post', {
              Jobs: mutipleMongooseToObject(Job),
              username: req.user.name,
            });
          })
          .catch(next)
      : await Job.find({ location: req.body.location })
          .then((Job) => {
            res.render('user/manager_post', {
              Jobs: mutipleMongooseToObject(Job),
              username: req.user.name,
            });
          })
          .catch(next);
  }

  async manager_post_approve(req, res) {
    try {
      await Job.find().then((Job) => {
        res.render('manager/post_approve', {
          Jobs: mutipleMongooseToObjectApprove(Job),
          username: req.user.name,
        });
      });
    } catch (error) {}
  }

  manager_post_job_page(req, res) {
    res.render('manager/post', { username: req.user.name });
  }

  manager_post_job(req, res) {
    const job = req.body;
    job.id_user = req.user._id;
    const jobs = new Job(job);
    jobs.save();
    res.redirect('/');
  }

  async manager_post_approved(req, res) {
    await Job.updateOne({ _id: req.params.id }, { approve: true }).then(
      (Job) => {
        res.redirect('/manager/approve');
      }
    );
  }

  async manager_post_approve_delete(req, res) {
    await Job.deleteOne({ _id: req.params.id }).then((Job) => {
      res.redirect('/manager/approve');
    });
  }
}

module.exports = new ManagerControllers();
