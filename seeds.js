var mongoose = require("mongoose");
var Achievement = require("./models/achievements");
var Member = require("./models/members_two");
var Kolo = require("./models/kolo");
const News = require("./models/news");
var faker = require("faker");
faker.locale = "pl";



function seedMembers(){
    /*Kolo.create({
            name: "v1",
            docs: "test",
            mission: "test"
        }, function(err, createdKolo) {
            if(err){
                console.log(err);
            }else{
                console.log("HELLO WORLD")
            }
        });*/
    Member.create({}, function(err, createdAchiev) {
        if(err){
            console.log(err);
        }else{
            console.log("hi im member");
        }
    }); 
        
    }
    
    
function seedNews(){
    var news = {
                title: 'im a a title hello!',
                imgUrl: 'https://images.pexels.com/photos/52608/pexels-photo-52608.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                text: 'proper way to introduce myself!',
                date: '11.11.2011'
            }
    
    News.create(news, (err, created)=>{
        if(err){
            console.log(err);
        }else{
            
            console.log(news, 'successfuly added! :)')
            
            
        }
    });
    
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
    seedNews();
    //seedAchievements();
}


module.exports = seedDB;