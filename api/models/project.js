const mongoose = require('mongoose');
const projectSchema = new mongoose.Schema({
    energy : {type: String},
    air : {type: String},
    water : {type: String},
    tour_360 : {type: String},
    footfall : {type: String},
    certification : {type: String},
    procurement : {type: String},
    waste : {type: String},
    health_N_safety: {type: String},
    controle: {type: String}

},{timestamps: true});
module.exports = mongoose.model('Project', projectSchema);