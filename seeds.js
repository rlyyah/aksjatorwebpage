var mongoose = require("mongoose");
var Achievement = require("./models/achievements");
var Member = require("./models/members_two");
var Kolo = require("./models/kolo");
const News = require("./models/news");
const Pnaukowe = require("./models/pnaukowe");
const Konferencje = require("./models/konferencje");
const Dzialalnosc = require("./models/dzialalnosc");
const Snaukowe = require("./models/sesjenaukowe");


var faker = require("faker");
faker.locale = "pl";


function seedPnaukowe(){
    Konferencje.create({
        title:'hello cruel world!',
        text:'text 2sadasdasdasd',
        date:'21.09.96 inna',
        imgUrl:'https://images.pexels.com/photos/1420417/pexels-photo-1420417.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        images:[
            'https://images.pexels.com/photos/929606/pexels-photo-929606.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            'https://images.pexels.com/photos/17737/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            'https://images.pexels.com/photos/1246960/pexels-photo-1246960.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            'https://images.pexels.com/photos/1251858/pexels-photo-1251858.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            'https://images.pexels.com/photos/1027516/pexels-photo-1027516.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            'https://images.pexels.com/photos/170894/pexels-photo-170894.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            'https://images.pexels.com/photos/1431762/pexels-photo-1431762.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            'https://images.pexels.com/photos/1251858/pexels-photo-1251858.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            'https://images.pexels.com/photos/1420417/pexels-photo-1420417.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        ]
    });
}

function seedDzialalnosc(){
    Dzialalnosc.create({publikacje:'heheheaheaheashhfdashfhasfhasfhasfhas'});
}


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
                title: 'im a a title hello!SNAUKOWE ALL THE WAY',
                imgUrl: 'https://images.pexels.com/photos/1423296/pexels-photo-1423296.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                text: 'proper way to introduce myself!',
                date: '11.11.2011'
            }
    
    Snaukowe.create(news, (err, created)=>{
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
    //seedNews();
    //seedAchievements();
    //seedPnaukowe();
    //seedDzialalnosc();
}


module.exports = seedDB;