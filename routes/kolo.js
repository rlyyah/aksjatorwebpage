var express = require("express"),
router = express.Router();


var Achievement = require("../models/achievements"),
    Kolo = require("../models/kolo"),
    Members = require("../models/members_two");
    
    
function alphabetizer(names) {
  return names.map(function(name) {
    var full = name.split(" "),
      last = full.pop();
    return last + " " + full.join(" ");
  }).sort();
}    

function nameFirst(names){
    return names.map((name)=>{
        var full = name.split(" "),
        first = full.pop();
        return first + ' ' + full.join(' ');
    })
}
    
/*var arrOfMemb = [];
Members.findOne({}, function(err, foundMembers) {
       if(err){
          console.log(err);
       }else{
           var arrOfStud = [];
           foundMembers.students.forEach((student)=>{
               console.log(student.name);
               
               arrOfStud.push(student.name);
               
            
           })
           var fixedArrStud = alphabetizer(arrOfStud);
           
          
          var arrOfGrad = []; 
          foundMembers.graduates.forEach((graduate)=>{
                arrOfGrad.push(graduate.name);   
           })
           var fixedArrGrad = alphabetizer(arrOfGrad);
           
           
           arrOfMemb.push(fixedArrStud)
           arrOfMemb.push(fixedArrGrad)
           console.log(arrOfMemb);
       }
   }); 
*/


router.get("/misja", function(req, res){
   Kolo.findOne({name:"v1"}, function(err, foundKolo){
      if(err){
         console.log(err);
      }else{
         res.render("kolo/misjakola", {mission: foundKolo});
      }
   });
});
router.get("/misja/edit", isLoggedIn, function(req, res) {
    Kolo.findOne({name:"v1"}, function(err, foundKolo){
      if(err){
         console.log(err);
      }else{
         res.render("kolo/edit-mission", {mission: foundKolo});
      }
   });
});
router.put("/misja", isLoggedIn, function(req, res) {
    Kolo.findOne({name:"v1"}, function(err, foundKolo){
      if(err){
         console.log(err);
      }else{
         foundKolo.missions = req.body.misja;
         foundKolo.save();
         res.redirect("/kolo/misja/edit");
      }
   });
});


router.get("/czlonkowie", function(req, res){
   Members.findOne({}, function(err, foundMembers) {
       if(err){
          console.log(err);
       }else{
           var arrOfMembs = [];
          var arrOfStud = [];
           foundMembers.students.forEach((student)=>{
               console.log(student.name);
               
               arrOfStud.push(student.name);
               
            
           })
           var fixedArrStud = alphabetizer(arrOfStud);
           var nameFirstArrStud = nameFirst(fixedArrStud);
        
          var arrOfGrad = []; 
          foundMembers.graduates.forEach((graduate)=>{
                arrOfGrad.push(graduate.name);   
           })
           var fixedArrGrad = alphabetizer(arrOfGrad);
           var nameFirstArrGrad = nameFirst(fixedArrGrad);
           
           
           arrOfMembs.push(nameFirstArrStud);
           arrOfMembs.push(nameFirstArrGrad);
          
          res.render("kolo/czlonkowie", {members: arrOfMembs});
       }
   });
});

router.get("/czlonkowie/manage", isLoggedIn, function(req, res) {
    Members.findOne({}, function(err, members) {
        if(err){
           console.log(err);
        }else{
           res.render("kolo/manage-members", {members:members});
        }
    });
});

router.post("/czlonkowie/manage", isLoggedIn, function(req, res) {
    Members.findOne({}, function(err, found) {
        if(err){
           console.log(err);
        }else{
           if(req.body.student){
              var retrieveData = req.body.student;
              found.students.push({name: retrieveData});
              found.save();
              res.redirect("/kolo/czlonkowie/manage");
           }else{
              var retrieveData = req.body.graduate;
              found.graduates.push({name: retrieveData});
              found.save();
              res.redirect("/kolo/czlonkowie/manage");
           }
        }
    });
});
router.delete("/czlonkowie/manage/students/:index", isLoggedIn, function(req, res) {
    var index = Number(req.body.index);
    Members.findOne({}, function(err, found){
       if(err){
          console.log(err);
       } else{
          found.students.splice(index, 1);
          found.save();
          res.redirect("/kolo/czlonkowie/manage");
       } 
    });
    
});
router.delete("/czlonkowie/manage/graduates/:id", isLoggedIn, function(req, res) {
    var index = Number(req.body.index);
    Members.findOne({}, function(err, found){
       if(err){
          console.log(err);
       } else{
          found.graduates.splice(index, 1);
          found.save(); 
          res.redirect("/kolo/czlonkowie/manage");
       } 
    });
});



router.get("/osiagniecia", function(req, res){
   Achievement.find({}, function(err, achiev){
      if(err){
         console.log("sth went wrong");
      }else{
         res.render("kolo/osiagniecia", {achievements:achiev});
      }
   });
});

router.get("/osiagniecia/add", isLoggedIn, function(req, res) {
   res.render("kolo/add-achievement"); 
});

router.get("/osiagniecia/manage", isLoggedIn, function(req, res) {
   Achievement.find({}, function(err, achiev){
      if(err){
         console.log("sth went wrong");
      }else{
         res.render("kolo/manage-achievement", {achievements:achiev});
      }
   });
   
   
});

router.get("/osiagniecia/:id", function(req, res) {
   Achievement.findById(req.params.id, function(err, achiev){
      if(err){
         console.log(err);
      }else{
         res.render("kolo/show-achievement", {achievements:achiev});
      }
   });
});



router.post("/osiagniecia", isLoggedIn, function(req, res){
 
   Achievement.create(req.body.achievement, function(err, achiev){
      if(err){
         console.log(err);
      }else{
         console.log("Achievment added");
         res.redirect("/kolo/osiagniecia/add");
      }
   });
});


router.get("/osiagniecia/:id/edit", isLoggedIn, function(req, res) {
    Achievement.findById(req.params.id, function(err, foundAchiev){
      if(err){
         console.log(err);
      }else{
         res.render("kolo/edit-achievement", {achievements:foundAchiev});
      }   
    });
});
router.put("/osiagniecia/:id", isLoggedIn, function(req, res){
   Achievement.findByIdAndUpdate(req.params.id, req.body.achievement, function(err, foundAchiev){
      if(err){
         console.log(err);
      }else{
         res.redirect("/kolo/osiagniecia/" + req.params.id);
      }
   });
});
router.delete("/osiagniecia/:id", isLoggedIn, function(req, res){
   Achievement.findByIdAndRemove(req.params.id, function(err){
      if(err){
         console.log(err);
      }else{
         res.redirect("/kolo/osiagniecia/manage");
      }
   });
});


router.get("/dokumenty", function(req, res){
   Kolo.findOne({name:"v1"}, function(err, foundKolo){
      if(err){
         console.log(err);
      }else{
         res.render("kolo/dokumenty", {docs: foundKolo});
      }
   });
});

router.get("/dokumenty/edit", isLoggedIn, function(req, res) {
    Kolo.findOne({name:"v1"}, function(err, foundKolo){
      if(err){
         console.log(err);
      }else{
         res.render("kolo/edit-docs", {docs: foundKolo});
      }
   });
});

router.put("/dokumenty", isLoggedIn, function(req, res) {
    Kolo.findOne({name:"v1"}, function(err, foundKolo){
      if(err){
         console.log(err);
      }else{
         foundKolo.docs = req.body.docs;
         foundKolo.save();
         res.redirect("/kolo/dokumenty");
      }
   }); 
});

router.get('/dolacz', (req, res)=>{
    
    Kolo.findOne({}, (err, found)=>{
        if(err){
            console.log(err);
        }else{
            res.render('kolo/dolacz', {text: found})
        }
    })
})

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





function isLoggedIn(req, res, next){
  if(req.isAuthenticated()){
      return next();
  }else{
      res.redirect("/login");
  }  
}

module.exports = router;