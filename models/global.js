var mongoose = require("mongoose");

var globalSchema = new mongoose.Schema({
    partners:[{
        imgUrl: String,
        linkUrl: String
    }]
});

module.exports = mongoose.model('global', globalSchema);