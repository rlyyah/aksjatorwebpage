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
    }
});

module.exports = mongoose.model('homepage', homepageSchema);