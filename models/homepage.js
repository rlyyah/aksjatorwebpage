var mongoose = require("mongoose");

var homepageSchema = new mongoose.Schema({
    img: [{
        url: String,
        link: String,
        button: {type:Boolean, default: false}
    }],
    przewo:{
        name: String,
        img: String,
        desc: String
    },
    vice:{
        name: String,
        img: String,
        desc: String
    },
    skarbik:{
        name: String,
        img: String,
        desc: String
    },
    sekretarz:{
        name: String,
        img: String,
        desc: String
    },
    opiekun1:{
        name: String,
        img: String,
        desc: String,
        link: String
    },
    opiekun2:{
        name: String,
        img: String,
        desc: String,
        link: String
    },
    okole:{
        text: {type:String, default: "test"}
    },
    mainPhotos:[String]
});

module.exports = mongoose.model('homepage', homepageSchema);