class InformationControllers
{
    contact(req, res)
    {
        res.render('information/contact',{username: req.user.name})
    }

    security(req, res)
    {
        res.render('information/security',{username: req.user.name})
    }

  



    
}

module.exports = new InformationControllers();