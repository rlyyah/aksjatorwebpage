var mongoose = require("mongoose");

//Schema Setup
var achievementSchema = new mongoose.Schema({
   title: String,
   content: String,
   date: String,
   img: String
});

module.exports = mongoose.model("Achievement", achievementSchema);