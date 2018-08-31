var express = require("express");
var router = express.Router();
var passport = require("passport");
var User    = require("../models/user");
var imgUrl = require("../imgrandomizer"); 
var homepage = require("../models/homepage");

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

homepage.findOne({}, (err, found)=>{
    if(err){console.log(err)}
    else{
        console.log('found.mainPhotos: ',found.mainPhotos);

    }
});


//====================
//======ROUTES========
//====================
                     

//MAIN ROUTE               

router.get("/", function(req, res){
    homepage.findOne({}, function(err, found){
        if(err){
            console.log(err);
        }else{
            res.render("main/homepage", {imgUrl: imgUrl, homepageImg: found});
            console.log(found.mainPhotos);
        }
    })
    
});

router.get('/aktualnosci', (req, res) => {
    res.render('aktualnosci/aktualnosci')
});


router.get("/edit", isLoggedIn, function(req, res) {
   res.render("main/admin-panel"); 
});

router.get('/edit/homepageedit', function(req, res) {
    homepage.findOne({}, (err, found)=>{
        if(err){
            console.log(err);
        }else{
            res.render('main/homepageedit', {homepageImg: found});
        }
    })
})

router.post('/edit/homepageedit', function(req, res) {
    
    homepage.findOne({}, function(err, found){
        if(err){
            console.log(err);
        }else{
            var newImg = req.body.imgurl;
            var buttoncheck = req.body.button;
            var link = req.body.link;
            var button = false;
            buttoncheck ? button = true : button = false;
            var wydObj = {
                url: newImg,
                link: link,
                button: button
            }
            found.img.unshift(wydObj);
            found.save();
            res.redirect('/edit');
        }
    })
});

router.get('/edit/zarzadedit', function(req, res) {
    res.render('main/zarzadedit');
});

router.post('/edit/zarzadedit', function(req, res) {
    homepage.findOne({}, function(err, found) {
        if(err){
            console.log(err);
        }else{
            if(req.body.przewo){
                console.log('retrieved data from przewo=', req.body.przewo)
                
                found.przewo = req.body.przewo;
                found.save();
                console.log('saved data=', found.przewo)
                res.redirect('/edit/zarzadedit');
            }else if(req.body.vice){
                found.vice = req.body.vice;
                found.save();
                console.log('retrieved data from vice=', req.body.vice)
                console.log('saved data=', req.body.vice)
                res.redirect('/edit/zarzadedit');
            }else if(req.body.skarbnik){
                console.log('retrieved data from skarbik=', req.body.skarbnik)
                found.skarbik = req.body.skarbnik;
                found.save();
                
                
                res.redirect('/edit/zarzadedit');
            }else if(req.body.sekretarz){
                found.sekretarz = req.body.sekretarz;
                found.save();
                console.log('retrieved data from sekretarz=', req.body.sekretarz)
                console.log('saved data=', req.body.sekretarz)
                res.redirect('/edit/zarzadedit');
                
            }else{
                res.redirect('/edit/zarzadedit');
                alert('sth went wrong!');
            }
        }
    })
})

router.get('/edit/okole', (req,res)=>{
    homepage.findOne({}, (err, found)=>{
        if(err){
            console.log(err);
        }else{
            res.render('main/okole', {okole: found.okole})
        }
    })
})

router.put('/okole', (req, res)=>{
     homepage.findOne({}, (err, found)=>{
        if(err){
            console.log(err);
        }else{
            found.okole.text = req.body.okole;
            found.save();
            res.redirect('/edit/okole');
        }
    })
})

router.get('/edit/zdj', (req, res)=>{
    homepage.findOne({}, (err, found)=>{
        if(err){
            console.log(err);
        }else{
            res.render('main/zdj', {zdj: found})
        }
    })
});
router.post('/zdj', (req, res)=>{
    homepage.findOne({}, (err, found)=>{
        if(err){
            console.log(err);
        }else{
            var zdjec = req.body.zdj;
            console.log(zdjec)
            found.mainPhotos.push(zdjec);
            found.save();
            res.redirect('/edit/zdj');
        }
    })
})




router.delete('/homepage/galeria/:index', isLoggedIn, (req, res)=>{
    var index = Number(req.body.index);
    homepage.findOne({}, (err, found)=>{
        if(err){
            console.log(err);
        }else{
            found.img.splice(index, 1);
            found.save();
            res.redirect('/edit/homepageedit');
        }
    })
})





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
