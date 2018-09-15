const express = require('express'),
      router = express.Router(),
      passport = require("passport");



// Models

const User = require("../models/user"),
      Homepage = require("../models/homepage"),
      Kolo = require("../models/kolo"),
      Global = require("../models/global"),
      Members = require("../models/members_two"),
      Achievement = require("../models/achievements")



// ======================
// Middlewares
// ======================

router.use((req, res, next)=>{
    if(req.isAuthenticated()){
      return next();
    }else{
      res.redirect("/login");
    }  
    
})

// ==============
// Routes
// ==============
      
router.get("/", function(req, res) {
   res.render("main/admin-panel"); 
});

//  ~~~~~~~~
// |Homepage|
//  ~~~~~~~~

// Zdjęcia przesuwne

router.get('/homepageedit', function(req, res) {
    Homepage.findOne({}, (err, found)=>{
        if(err){
            console.log(err);
        }else{
            res.render('admin/homepage/zdjeciaprzesuwne', {homepageImg: found});
        }
    })
})

router.post('/homepageedit', function(req, res) {
    
    Homepage.findOne({}, function(err, found){
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
            res.redirect('/edit/homepageedit');
        }
    })
});

router.delete('/homepageedit/:index', (req, res)=>{
    var index = Number(req.body.index);
    Homepage.findOne({}, (err, found)=>{
        if(err){
            console.log(err);
        }else{
            found.img.splice(index, 1);
            
            found.save();
            res.redirect('/edit/homepageedit');
        }
    })
});

// Zarząd

router.get('/zarzadedit', function(req, res) {
    res.render('admin/homepage/zarzadedit');
});

router.post('/zarzadedit', function(req, res) {
    Homepage.findOne({}, function(err, found) {
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

// O kole

router.get('/okole', (req,res)=>{
    Homepage.findOne({}, (err, found)=>{
        if(err){
            console.log(err);
        }else{
            res.render('admin/homepage/okole', {okole: found.okole})
        }
    });
});

router.put('/okole', (req, res)=>{
     Homepage.findOne({}, (err, found)=>{
        if(err){
            console.log(err);
        }else{
            found.okole.text = req.body.okole;
            found.save();
            res.redirect('/edit/okole');
        }
    });
});

// zdjecia w tle

router.get('/zdj', (req, res)=>{
    Homepage.findOne({}, (err, found)=>{
        if(err){
            console.log(err);
        }else{
            res.render('admin/homepage/zdj', {zdj: found})
        }
    });
});

router.post('/zdj', (req, res)=>{
    Homepage.findOne({}, (err, found)=>{
        if(err){
            console.log(err);
        }else{
            var zdjec = req.body.zdj;
            console.log(zdjec)
            found.mainPhotos.push(zdjec);
            found.save();
            res.redirect('/edit/zdj');
        }
    });
});

router.delete('/zdj/:index', (req, res)=>{
    var index = Number(req.body.index);
    Homepage.findOne({}, (err, found)=>{
        if(err){
            console.log(err);
        }else{
            
            found.mainPhotos.splice(index, 1);
            found.save();
            
            console.log('photo succesfully removed!');
            res.redirect('/edit/zdj');
        }
    });
});

// Partnerzy

router.get('/edit-sponsors', (req, res)=>{
   Global.findOne({}, (err, found)=>{
       if(err){
           console.log(err);
       }else{
           res.render('admin/homepage/edit-sponsors', {global: found});
       }
   });
});

router.post('/sponsors', (req, res)=>{
    Global.findOne({}, (err, found)=>{
        if(err){
            console.log(err);
        }else{
            var partnerObj = req.body.partners;
            
            found.partners.push(partnerObj);
            found.save();
            
            res.redirect('/edit/edit-sponsors');
        }
    });
});

router.delete('/sponsors/:index', (req, res)=>{
    Global.findOne({}, (err, found)=>{
        if(err){
            console.log(err);
        }else{
            var index = req.body.index;
            console.log(index);
            found.partners.splice(index, 1);
            found.save();
            res.redirect('/edit/edit-sponsors')
        }
    });
})

//  ~~~~~~~~
//   |Koło|
//  ~~~~~~~~

// Misja

router.get("/misja", function(req, res) {
    Kolo.findOne({name:"v1"}, function(err, foundKolo){
      if(err){
         console.log(err);
      }else{
         res.render("admin/kolo/edit-mission", {mission: foundKolo});
      }
   });
});

router.put("/misja", function(req, res) {
    Kolo.findOne({name:"v1"}, function(err, foundKolo){
      if(err){
         console.log(err);
      }else{
         foundKolo.missions = req.body.misja;
         foundKolo.save();
         res.redirect("/edit/misja/");
      }
   });
});

// Członkowie

router.get("/czlonkowie", function(req, res) {
    Members.findOne({}, function(err, members) {
        if(err){
           console.log(err);
        }else{
           res.render("admin/kolo/manage-members", {members:members});
        }
    });
});

router.post("/czlonkowie", function(req, res) {
    Members.findOne({}, function(err, found) {
        if(err){
           console.log(err);
        }else{
           if(req.body.student){
              var retrieveData = req.body.student;
              found.students.push({name: retrieveData});
              found.save();
              res.redirect("/edit/czlonkowie/");
           }else{
              var retrieveData = req.body.graduate;
              found.graduates.push({name: retrieveData});
              found.save();
              res.redirect("/edit/czlonkowie/");
           }
        }
    });
});

router.delete("/czlonkowie/students/:index", function(req, res) {
    var index = Number(req.body.index);
    Members.findOne({}, function(err, found){
       if(err){
          console.log(err);
       } else{
          found.students.splice(index, 1);
          found.save();
          res.redirect("/edit/czlonkowie");
       } 
    });
    
});

router.delete("/czlonkowie/graduates/:id", function(req, res) {
    var index = Number(req.body.index);
    Members.findOne({}, function(err, found){
       if(err){
          console.log(err);
       } else{
          found.graduates.splice(index, 1);
          found.save(); 
          res.redirect("/edit/czlonkowie");
       } 
    });
});

// Osiągnięcia

router.get("/osiagniecia/manage", function(req, res) {
   Achievement.find({}, function(err, achiev){
      if(err){
         console.log("sth went wrong");
      }else{
         res.render("admin/kolo/manage-achievement", {achievements:achiev});
      }
 });
});

router.post("/osiagniecia", function(req, res){
   Achievement.create(req.body.achievement, function(err, achiev){
      if(err){
         console.log(err);
      }else{
         console.log("Achievment added");
         res.redirect("/edit/osiagniecia/add");
      }
   });
});   

router.get("/osiagniecia/:id/edit", function(req, res) {
    Achievement.findById(req.params.id, function(err, foundAchiev){
      if(err){
         console.log(err);
      }else{
         res.render("admin/kolo/edit-achievement", {achievements:foundAchiev});
      }   
    });
});

router.put("/osiagniecia/:id", function(req, res){
   Achievement.findByIdAndUpdate(req.params.id, req.body.achievement, function(err, foundAchiev){
      if(err){
         console.log(err);
      }else{
         res.redirect("/kolo/osiagniecia/" + req.params.id);
      }
   });
});

router.delete("/osiagniecia/:id", function(req, res){
   Achievement.findByIdAndRemove(req.params.id, function(err){
      if(err){
         console.log(err);
      }else{
         res.redirect("/edit/osiagniecia/manage");
      }
   });
});
   
router.get("/osiagniecia/add", function(req, res) {
   res.render("admin/kolo/add-achievement"); 
});

// Dokumenty

router.get("/dokumenty", function(req, res) {
    Kolo.findOne({name:"v1"}, function(err, foundKolo){
      if(err){
         console.log(err);
      }else{
         res.render("admin/kolo/edit-docs", {docs: foundKolo});
      }
   });
});

router.put("/dokumenty", function(req, res) {
    Kolo.findOne({name:"v1"}, function(err, foundKolo){
      if(err){
         console.log(err);
      }else{
         foundKolo.docs = req.body.docs;
         foundKolo.save();
         res.redirect("/edit/dokumenty");
      }
   }); 
});

// Dołącz do nas!

router.get('/dolacz', (req, res)=>{
   Kolo.findOne({},(err, found)=>{
       if(err){
           console.log(err);
       }else{
           res.render('admin/kolo/edit-dolacz', {text:found});
       }
   }); 
});

router.put('/dolacz', (req, res)=>{
    Kolo.findOne({}, (err, found)=>{
        if(err){
            console.log(err);
        }else{
            var newDolacz = req.body.dolacz;
            found.dolacz = newDolacz;
            found.save();
            res.redirect('/edit/dolacz')
        }
    })
})




module.exports = router;