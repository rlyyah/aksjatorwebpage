var mongoose = require("mongoose");
var Achievement = require("./models/achievements");
var Member = require("./models/members_two");
var Kolo = require("./models/kolo");
var faker = require("faker");
faker.locale = "pl";



function seedMembers(){
    Kolo.create({
            name: "v1",
            docs: "test",
            mission: "test"
        }, function(err, createdKolo) {
            if(err){
                console.log(err);
            }else{
                console.log("HELLO WORLD")
            }
        });
    /*Member.create({}, function(err, createdAchiev) {
        if(err){
            console.log(err);
        }else{
            console.log("hi im member");
        }
    }); */
        
    }
    




function seedAchievements(){
    Achievement.remove({}, function(err){
        if(err){
            console.log(err);
        }else{
            for(var i = 0; i<3; i++){
                var tit = faker.name.title();
                var cont = faker.lorem.text();
                var url = faker.image.imageUrl();
                Achievement.create({
                    title: tit,
                    content: cont,
                    img: url
                }, function(err, createdAchiev){
                   if(err){
                       console.log(err);
                   } else{
                       console.log("#" + i + ": " + createdAchiev);
                   }
                });
            }
        }
    });
}

function seedDB(){
    seedMembers();
    seedAchievements();
}


module.exports = seedDB;