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

var Gallery = require('express-photo-gallery');

var options = {
  title: 'My Awesome Photo Gallery'
};      

router.use('/photos', Gallery('public/img', options));
    
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

router.get("/osiagniecia", function(req, res){
   Achievement.find({}, function(err, achiev){
      if(err){
         console.log("sth went wrong");
      }else{
         res.render("kolo/osiagniecia", {achievements:achiev});
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


router.get("/dokumenty", function(req, res){
   Kolo.findOne({name:"v1"}, function(err, foundKolo){
      if(err){
         console.log(err);
      }else{
         res.render("kolo/dokumenty", {docs: foundKolo});
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







function isLoggedIn(req, res, next){
  if(req.isAuthenticated()){
      return next();
  }else{
      res.redirect("/login");
  }  
}

module.exports = router;