const mongoose = require("mongoose");

var partnerzySchema = new mongoose.Schema({
    name: String,
    desc: String,
    imgUrl: String
});

module.exports = mongoose.model('parterzy', partnerzySchema);