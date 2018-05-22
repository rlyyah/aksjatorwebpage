var mongoose = require("mongoose");

var managementSchema = new mongoose.Schema({
   version: String,
   activeMembers: [{
       name: String
   }],
   graduates: [{
       name: String
   }],
   achievements: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Achievement"
    }],
    missions: String,
    docs: String
});

module.exports = mongoose.model("ManageKolo", managementSchema);