const mongoose = require("mongoose");

var snaukoweSchema = new mongoose.Schema({
    title: String,
    imgUrl: String,
    text: String,
    date: String
});

module.exports = mongoose.model('snaukowe', snaukoweSchema);
