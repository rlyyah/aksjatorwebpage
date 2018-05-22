var mongoose = require("mongoose");

var koloSchema = new mongoose.Schema({
    name: String,
    missions: String,
    members: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Member"
        }
        ],
    achievements: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Achievement"
    }],
    docs: String
});

module.exports = mongoose.model("Kolo", koloSchema);