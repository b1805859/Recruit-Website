class InformationControllers
{
    contact(req, res)
    {
        res.render('information/contact')
    }

    security(req, res)
    {
        res.render('information/security')
    }

  



    
}

module.exports = new InformationControllers();