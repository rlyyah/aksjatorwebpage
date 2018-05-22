var mongoose = require("mongoose");
var Achievement = require("./models/achievements");
var Member = require("./models/members");
var Kolo = require("./models/KoloManage");
var faker = require("faker");
faker.locale = "pl";



function seedMembers(){
    Member.remove({}, function(err) {
        if(err){
            console.log(err);
        }else{
            for(var i=0; i<30; i++){
                Member.students.create({
                    name: faker.name.findName()
                }, function(err, createdStudent){
                    if(err){
                        console.log(err);
                    }else{
                        console.log(createdStudent)
                    }
                });
                Member.graduates.create({
                    name: faker.name.findName()
                }, function(err, createdGraduate){
                    if(err){
                        console.log(err);
                    }else{
                        console.log(createdGraduate);
                    }
                });
            }
        }
    });
}

function seedAchievements(){
    Achievement.remove({}, function(err){
        if(err){
            console.log(err);
        }else{
            for(var i = 0; i<15; i++){
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
    
}


module.exports = seedDB;