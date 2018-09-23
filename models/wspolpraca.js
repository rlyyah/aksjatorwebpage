const mongoose = require("mongoose");

var wspolpracaSchema = new mongoose.Schema({
    oferta: {type:String, default:'insert text here!'},
    wspomoz: {type:String, default:'insert text here!'}
});

module.exports = mongoose.model('wspolpraca', wspolpracaSchema);