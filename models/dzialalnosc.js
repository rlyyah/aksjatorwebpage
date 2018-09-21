const mongoose = require("mongoose");

var dzialalnoscSchema = new mongoose.Schema({
    publikacje: {type: String, default:'test text hello world'}
});

module.exports = mongoose.model('dzialalnosc', dzialalnoscSchema);