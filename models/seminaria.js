const mongoose = require("mongoose");

var seminariaSchema = new mongoose.Schema({
    title: String,
    desc: String,
    text: String,
    date: String,
    imgUrl: String,
    images: [String]
});

module.exports = mongoose.model('seminaria', seminariaSchema);