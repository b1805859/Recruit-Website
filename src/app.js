var express = require("express");
var exphbs = require("express-handlebars");
var path = require("path");
var app = express();
const bp = require("body-parser");

var methodOverride = require("method-override");
app.use(methodOverride("_method"));
const port = process.env.PORT;

app.use(express.static(path.join(__dirname, "/public")));
var router = require("./routes/index.js");
var connect = require("./config/db/index.js");
var cookieParser = require("cookie-parser");

var hbs = exphbs.create({
  extname: ".hbs",
  helpers: {
    sum(a, b) {
      return a + b;
    },
  },
});

app.use(cookieParser());

//De truoc router
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "views"));

connect();
router(app);

app.listen(port || 8181, () => {
  console.log(`Server running on port ${port}`);
});
