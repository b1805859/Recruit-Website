var express = require('express');
var exphbs  = require('express-handlebars');
var path = require('path');
var app = express();
const bp = require('body-parser')
var nodemailer =  require('nodemailer');
const port = process.env.PORT;

var router = require('./routes/index.js')
var connect = require('./config/db/index.js')
var cookieParser = require('cookie-parser')

var hbs = exphbs.create({extname: '.hbs'});

app.use(cookieParser())

//De truoc router
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

router(app);
connect();



app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));


app.use(express.static(path.join(__dirname, '/public')));


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });