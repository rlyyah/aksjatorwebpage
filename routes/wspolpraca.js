var express = require("express"),
router = express.Router();

const Npartnerzy = require("../models/nasipartnerzy"),
      Wspolpraca = require("../models/wspolpraca"),
      Seminaria = require("../models/seminaria"),
      WyjazdyNaukowe = require("../models/wyjazdynaukowe");

router.get('/nasipartnerzy', (req, res)=>{
    Npartnerzy.find({}, (err, found)=>{
        if(err){
            console.log(err);
        }else{
            res.render('wspolpraca/nasipartnerzy', {partnerzy: found});
        }
    });
});

router.get('/ofertawspolpracy', (req, res)=>{
    Wspolpraca.findOne({},(err, found)=>{
        if(err){
            console.log(err);
        }else{
            res.render('wspolpraca/ofertawspolpracy', {wspolpraca:found});
        }
    })
});

router.get('/wspomoznas', (req, res)=>{
    Wspolpraca.findOne({},(err, found)=>{
        if(err){
            console.log(err);
        }else{
            res.render('wspolpraca/wspomoznas', {wspolpraca:found});
        }
    })
});

router.get('/seminaria', (req, res)=>{
    Seminaria.find({}, (err, found)=>{
        if(err){
            console.log(err);
        }else{
            res.render('wspolpraca/seminaria', {data: found});
        }
    });
});

router.get('/seminaria/:id', (req, res)=>{
    Seminaria.findById(req.params.id, (err, found)=>{
        if(err){
            console.log(err);
        }else{
            res.render('wspolpraca/seminariashow', {data: found});
        }
    });
});

router.get('/wyjazdynaukowe', (req, res)=>{
    WyjazdyNaukowe.find({}, (err, found)=>{
        if(err){
            console.log(err);
        }else{
            res.render('wspolpraca/wyjazdynaukowe', {data: found});
        }
    });
});

router.get('/wyjazdynaukowe/:id', (req, res)=>{
    WyjazdyNaukowe.findById(req.params.id, (err, found)=>{
        if(err){
            console.log(err);
        }else{
            res.render('wspolpraca/wyjazdynaukoweshow', {data: found});
        }
    });
});


module.exports = router;