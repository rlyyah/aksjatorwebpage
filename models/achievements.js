var mongoose = require("mongoose");

//Schema Setup
var achievementSchema = new mongoose.Schema({
   title: String,
   content: String,
   date: {type: Date, default: Date.now},
   img: String
});

module.exports = mongoose.model("Achievement", achievementSchema);