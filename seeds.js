var mongoose = require("mongoose");
var Achievement = require("./models/achievements");
var Member = require("./models/members_two");
var Kolo = require("./models/kolo");
const News = require("./models/news");
const Pnaukowe = require("./models/pnaukowe");
const Konferencje = require("./models/konferencje");
const Dzialalnosc = require("./models/dzialalnosc");
const Snaukowe = require("./models/sesjenaukowe");
const Npartnerzy = require("./models/nasipartnerzy");
const Wspolpraca = require("./models/wspolpraca");
const WyjazdyNaukowe = require('./models/wyjazdynaukowe');
const Seminaria = require('./models/seminaria');



var faker = require("faker");
faker.locale = "pl";



function seedSeminaria(){
    Seminaria.create({
        title: 'title',
        desc: 'desc',
        text: 'text',
        date: 'date',
        imgUrl: 'https://images.pexels.com/photos/219014/pexels-photo-219014.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        images: ['https://images.pexels.com/photos/1261408/pexels-photo-1261408.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 'https://images.pexels.com/photos/709188/pexels-photo-709188.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260']
    }, (err, created)=>{
        if(err){
            console.log(err);
        }else{
            console.log('seminarium created!');
        }
    });
}
function seedWyjazdyNauk(){
    WyjazdyNaukowe.create({
        title: 'title',
        desc: 'desc',
        text: 'text',
        date: 'date',
        imgUrl: 'https://images.pexels.com/photos/219014/pexels-photo-219014.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        images: ['https://images.pexels.com/photos/1261408/pexels-photo-1261408.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 'https://images.pexels.com/photos/709188/pexels-photo-709188.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260']
    },(err, created)=>{
        if(err){
            console.log(err);
        }else{
            console.log('seminarium created!');
        }
    });
}

function seedWspolpraca(){
    Wspolpraca.create({oferta: 'hello there!',
        wspomoz:'here also:3'
    });
}

function seedPartnerzy(){
    Npartnerzy.create({
        name: 'Sknerus McKwacz',
        desc: 'Sknerus McKwacz urodził się w 1867 w Glasgow w Szkocji, w zubożałej, choć niegdyś potężnej rodzinie McKwaczów. Mieszkał tam wraz z ojcem Fergusem, matką Kaczencją, stryjem Nerwusem i młodszymi siostrami – Matyldą i Hortensją.',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Spirit_43_-_Scrooge_-_Oncle_Picsou_-_Garrepa.JPG/240px-Spirit_43_-_Scrooge_-_Oncle_Picsou_-_Garrepa.JPG'
    });
}

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
    seedSeminaria();
    seedWyjazdyNauk();
    //seedWspolpraca();
    //seedPartnerzy();
    //seedNews();
    //seedAchievements();
    //seedPnaukowe();
    //seedDzialalnosc();
}


module.exports = seedDB;