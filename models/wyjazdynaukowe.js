const mongoose = require("mongoose");

var wyjazdyNaukSchema = new mongoose.Schema({
    title: String,
    desc: String,
    text: String,
    date: String,
    imgUrl: String,
    images: [String]
});

module.exports = mongoose.model('wyjazdynaukowe', wyjazdyNaukSchema);