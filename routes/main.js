const express = require("express"),
      router = express.Router(),
      passport = require("passport");

const imgUrl = require("../imgrandomizer"), 
      homepage = require("../models/homepage"),
      global = require("../models/global"),
      User = require("../models/user"),
      News = require("../models/news");
      
 


/*homepage.create({}, function(err, created){
    if(err){console.log(err);
        
    }else{
        console.log('hi');
    }
})*/
/*homepage.findOne({}, function(err, found){
    if(err){
        console.log(err);
    }else{
        var imgU = {url:'https://i.stack.imgur.com/P6uUK.png'};
        var imgU2 = {url:'https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1522622236000/photosp/eaf1d248-81e2-443c-a9b0-33c895235586/stock-photo-coffee-cup-funny-coffee-mug-silly-drinking-coffee-words-in-wild-something-funny-fun-mug-funny-photos-eaf1d248-81e2-443c-a9b0-33c895235586.jpg'};
        
        found.img.push(imgU);
        found.img.push(imgU2);
        
        found.save();
    }
})*/

/*global.create({partners:[{urlImg: 'lol', linkImg: 'kappa'}]}, (err, created)=>{
    if(err){
        console.log(err);
    }else{
        console.log('say hi!')
    }
})*/


/*homepage.findOne({}, (err, found)=>{
    if(err){console.log(err)}
    else{
        console.log('found.mainPhotos: ',found.mainPhotos);

    }
});*/




//====================
//======ROUTES========
//====================
                     

//MAIN ROUTE               

router.get("/", function(req, res){
    homepage.findOne({}, function(err, found){
        if(err){
            console.log(err);
        }else{
            global.findOne({}, (err, global)=>{
                if(err){
                    console.log(err);
                }else{
                    res.render("main/homepage", {imgUrl: imgUrl, homepageImg: found, global: global });        
                }
            })
            
            
            
        }
    })
    
});

router.get('/aktualnosci', (req, res) => {
    News.find({}, (err, found)=>{
        if(err){
            console.log(err);
        }else{
            res.render('aktualnosci/aktualnosci', {news: found});        
        }
    })
});



router.get('/aktualnosci/:id', (req,res)=>{
    News.findById( req.params.id, (err, found)=>{
        if(err){
            console.log(err);
        }else{
            News.find({}, (err, titles)=>{
                if(err){
                    console.log(err);
                }else{
                    res.render('aktualnosci/aktualnosci-show', {news: found, showTits: titles});        
                }
            });
        }
    });
});

router.get('/dzialnosc', (req, res)=>{
    
    News.findOne({}, (err, found)=>{
        if(err){
            console.log(err);
        }else{
            res.render('dzialalnosc/projektynaukoweshow', {news: found});        
        }
    })
})

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



module.exports = router;
