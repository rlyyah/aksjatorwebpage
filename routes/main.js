var express = require("express");
var router = express.Router();
var passport = require("passport");
var User    = require("../models/user");

//====================
//======ROUTES========
//====================
                     

//MAIN ROUTE               

router.get("/", function(req, res){
    res.render("main/homepage");
});

router.get("/edit", isLoggedIn, function(req, res) {
   res.render("main/admin-panel"); 
});



//======================
//====FUTURE=ROUTES=====
//======================


// ================
// Auth
// ================

router.get("/register", function(req, res) {
    res.render("register");
});
router.post("/register", function(req, res) {
    /*res.send("register function is no avaible right now!");*/
   var newUser = new User({username: req.body.username});
   User.register(newUser, req.body.password, function(err, user){
      if(err){
          console.log(err);
          return res.redirect("/register");
      }
      passport.authenticate("local")(req, res, function(){
         res.redirect("/"); 
      });
      
   });
});

router.get("/login", function(req, res) {
   res.render("login"); 
});

router.post("/login", passport.authenticate("local", 
{
    successRedirect: "/edit",
    failureRedirect: "/login"
    
}) ,function(req, res) {
   
});

router.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
    
});

function isLoggedIn(req, res, next){
  if(req.isAuthenticated()){
      return next();
  }else{
      res.redirect("/login");
  }  
}

module.exports = router;
