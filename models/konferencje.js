const mongoose = require("mongoose");

var konferencjeSchema = new mongoose.Schema({
    title: String,
    text: String,
    date: String,
    imgUrl: String,
    images: [String]
});

module.exports = mongoose.model('konferencje', konferencjeSchema);