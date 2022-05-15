const Jobs = require('../Models/Jobs');
const {
  mutipleMongooseToObject,
  singleToObject,
} = require('../src/util/mongoose');

class JobControllers {
  homeheader(req, res, next) {
    Jobs.find({})
      .then((Jobs) => {
        res.render('search/jobs', {
          Jobs: mutipleMongooseToObject(Jobs),
          username: req.user.name,
        });
      })
      .catch(next);
  }

  home(req, res, next) {
    return req.body.keyword
      ? Jobs.find({
          keyword: {
            $regex: '.*' + `${req.body.keyword}` + '.*',
            $options: 'i',
          },
          location: req.body.location,
        })
          .then((Jobs) => {
            res.render('search/jobs', {
              Jobs: mutipleMongooseToObject(Jobs),
              username: req.user.name,
            });
          })
          .catch(next)
      : Jobs.find({ location: req.body.location })
          .then((Jobs) => {
            res.render('search/jobs', {
              Jobs: mutipleMongooseToObject(Jobs),
              username: req.user.name,
            });
          })
          .catch(next);
  }

  detail(req, res, next) {
    Jobs.findById({ _id: req.params.id }).then((Job) => {
      res.render('search/detail', {
        Job: singleToObject(Job),
        username: req.user.name,
      });
    });
  }

  apply(req, res, next) {
    Jobs.findOne({ _id: req.params.id }).then((Job) => {
      res.render('search/apply', {
        Job: singleToObject(Job),
        username: req.user.name,
      });
    });
  }

  applied(req, res) {
    Jobs.updateOne(
      { _id: req.params.id },
      {
        $push: {
          user_apply: {
            userEmail: req.body.userEmail,
            userNumber: req.body.userNumber,
            userLinkCV: req.body.linkCV,
          },
        },
      },
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(400).send('Error');
        } else {
          res.redirect('/search/jobs');
        }
      }
    );
  }

  post(req, res) {
    res.render('search/post', { username: req.user.name });
  }

  stored(req, res) {
    const job = req.body;
    job.id_user = req.user._id;
    const jobs = new Jobs(job);
    jobs.save();
    res.redirect('/search/jobs');
  }

  contact(req, res) {
    res.render('search/contact', { username: req.user.name });
  }

  security(req, res) {
    res.render('search/security', { username: req.user.name });
  }
}

module.exports = new JobControllers();
