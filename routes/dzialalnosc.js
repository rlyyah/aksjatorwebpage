var express = require("express"),
router = express.Router();

var achiev = require("../models/achievements"),
    Pnaukowe = require("../models/pnaukowe"),
    Konferencje = require("../models/konferencje"),
    Dzialalnosc = require("../models/dzialalnosc"),
    Snaukowe = require("../models/sesjenaukowe")
    News = require("../models/news");
    
    
const baguetteBox = require('baguettebox.js');





    
/*var Gallery = require('express-photo-gallery');

var options = {
  title: 'My Awesome Photo Gallery'
};      

router.use('/photos/projektynaukowe', Gallery('public/img/dzialalnosc/projektynaukowe', options));    
router.use('/photos/sesjenaukowe', Gallery('public/img/dzialalnosc/sesjenaukowe', options));  */



router.get('/projektynaukowe', function(req, res){
    Pnaukowe.find({}, (err, found)=>{
        if(err){
            console.log(err);
        }else{
            res.render('dzialalnosc/projektynaukowe', {news:found});
        }
    });
});
router.get('/projektynaukowe/:id',(req,res)=>{
    Pnaukowe.findById(req.params.id, (err, found)=>{
        if(err){
            console.log(err);
        }else{
            res.render('dzialalnosc/test', {pnaukowy: found});
        }
    });
});

router.get('/konferencje', function(req, res){
    Konferencje.find({}, (err, found)=>{
        if(err){
            console.log(err);
        }else{
            res.render('dzialalnosc/konferencje', {news:found});
        }
    });
});

router.get('/konferencje/:id',(req,res)=>{
    Konferencje.findById(req.params.id, (err, found)=>{
        if(err){
            console.log(err);
        }else{
            res.render('dzialalnosc/konferencjeshow', {pnaukowy: found});
        }
    });
});

router.get('/publikacje', function(req, res){
    Dzialalnosc.findOne({}, (err, found)=>{
        if(err){
            console.log(err);
        }else{
            res.render('dzialalnosc/publikacje', {dzialalnosc:found});
        }
    });
});

router.get('/sesjenaukowe', function(req, res){
    Snaukowe.find({}, (err, found)=>{
        if(err){
            console.log(err);
        }else{
            res.render('dzialalnosc/sesjenaukowe', {news:found});
        }
    });
});

router.get('/sesjenaukowe/:id',(req,res)=>{
    
    Snaukowe.find({}, (err, found1)=>{
        if(err){
            console.log(err);
        }else{
           Snaukowe.findById(req.params.id, (err, found)=>{
            if(err){
                console.log(err);
            }else{
                res.render('dzialalnosc/snaukoweshow', {news: found, showAll: found1});
            }
            });
        }
    });
    
    
    
});

module.exports = router;