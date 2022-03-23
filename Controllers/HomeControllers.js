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

}

module.exports = new HomeControllers();