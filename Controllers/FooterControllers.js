class SiteControllers
{
    contact(req, res)
    {
        res.render('footers/contact')
    }

    security(req, res)
    {
        res.render('footers/security')
    }

  



    
}

module.exports = new SiteControllers();