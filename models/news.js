const mongoose = require("mongoose");

var newsSchema = new mongoose.Schema({
    title: String,
    imgUrl: String,
    text: String,
    date: String
});

module.exports = mongoose.model('news', newsSchema);
