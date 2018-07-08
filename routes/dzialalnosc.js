var express = require("express"),
router = express.Router();

var achiev = require("../models/achievements");

router.get('/projektynaukowe', function(req, res){
    achiev.find({}, function(err, found){
        if(err){
            console.log(err);
        }else{
            res.render('dzialalnosc/projektynaukowe', {achievements:found});
        }
    })
    
});

module.exports = router;