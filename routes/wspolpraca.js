var express = require("express"),
router = express.Router();

const Npartnerzy = require("../models/nasipartnerzy"),
      Wspolpraca = require("../models/wspolpraca");

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



module.exports = router;