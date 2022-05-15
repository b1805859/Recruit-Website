const {
  mutipleMongooseToObject,
  singleToObject,
} = require('../src/util/mongoose.js');
const Job = require('../Models/Jobs');
const { find } = require('../Models/Jobs');
class HomeControllers {
  home(req, res) {
    res.render('home', { username: req.user.name });
  }

  logout(req, res) {
    res.clearCookie('token');
    res.redirect('/login');
    res.end();
  }

  async manager_post(req, res) {
    await Job.find({ id_user: req.user._id }).then((data) => {
      res.render('user/user_post', { Jobs: mutipleMongooseToObject(data) });
    });
  }

  async delete_post(req, res) {
    await Job.deleteOne({ _id: req.params.id }).then((data) => {
      res.redirect('/user_post');
    });
  }

  async edit_post_page(req, res) {
    await Job.findOne({ _id: req.params.id }).then((data) => {
      res.render('user/edit_post', { Job: singleToObject(data) });
    });
  }

  async edit_post(req, res) {
    await Job.updateOne({ _id: req.params.id }, req.body).then((data) =>
      res.redirect('/user_post')
    );
  }

  async manager_user_apply(req, res) {
    await Job.findOne({ _id: req.params.id }).then((data) => {
      req.idjob = data._id;
      res.render('user/manager_user_apply', { Job: singleToObject(data) });
    });
  }

  delete_user_apply(req, res) {
    Job.findOneAndUpdate(
      { _id: req.params.job },
      {
        $pull: {
          user_apply: { _id: req.params.id },
        },
      },
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(400).send('Error');
        } else {
          res.redirect('back');
        }
      }
    );
  }
}

module.exports = new HomeControllers();
