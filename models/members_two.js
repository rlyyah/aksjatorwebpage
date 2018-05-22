var mongoose = require("mongoose");

var memberSchema = new mongoose.Schema({
    students:[{
        name: String
    }],
    graduates:[{
        name: String
    }]
});

module.exports = mongoose.model("Memberstwo", memberSchema);