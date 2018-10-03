var bodyParser = require("body-parser"),
methodOverride = require("method-override"),
    mongoose   = require("mongoose"),
    express    = require("express"),
    passport   = require("passport"),
localStategy   = require("passport-local"),
    faker      = require("faker"),
    app        = express();
    
    
var mainRoutes = require("./routes/main"),
    koloRoutes = require("./routes/kolo"),
    dzialalnoscRoutes = require("./routes/dzialalnosc"),
    wspolpracaRoutes = require("./routes/wspolpraca"),
    adminRoutes = require("./routes/admin");
   



var Member = require("./models/members"),
    Achievement = require("./models/achievements"),
    Kolo = require("./models/kolo"),
    Members = require("./models/members_two"),
    User = require("./models/user");



var seedDB = require("./seeds");



app.use(require("express-session")({
    secret: "Tomasz is the best!",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


mongoose.connect("mongodb://aksjator:aksjatorp4ssword@ds131800.mlab.com:31800/aksjator");
//seedDB();
/*mongoose.connect("mongodb://localhost/wgig_page");
*/



app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");






app.use(mainRoutes);
app.use("/kolo", koloRoutes);
app.use('/dzialalnosc', dzialalnoscRoutes);
app.use('/wspolpraca', wspolpracaRoutes);
app.use('/edit', adminRoutes);


app.get('*', function(req, res) {
    res.render('main/notfound');
});



/*function isLoggedIn(req, res, next){
  if(req.isAuthenticated()){
      return next();
  }else{
      res.redirect("/login");
  }  
};*/


app.listen(process.env.PORT, process.env.IP, function(){
   console.log("3..."); 
   console.log("2..."); 
   console.log("1..."); 
   console.log("Server has started!"); 
});