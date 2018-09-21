const mongoose = require("mongoose");

var pnaukoweSchema = new mongoose.Schema({
    title: String,
    text: String,
    date: String,
    imgUrl: String,
    images: [String]
});

module.exports = mongoose.model('pnaukowe', pnaukoweSchema);