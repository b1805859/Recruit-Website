var express = require('express');
var exphbs  = require('express-handlebars');
var path = require('path');
var app = express();
var bodyParser = require('body-parser')

var router = require('./routes/index.js')
var connect = require('./config/db/index.js')

var hbs = exphbs.create({extname: '.hbs'});

router(app);
connect();

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())





app.use(express.static(path.join(__dirname, '/public')));




  


app.listen(3000);