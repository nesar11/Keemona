const mongoose = require('mongoose');
const serviceSchema = new mongoose.Schema({
    service_name : {type: String},
    service_Kee_Code: {type: String},
    description: {type: String},
    specifications: {type: String},
    more_info: {type: String}

},{timestamps: true});

module.exports = mongoose.model('Service', serviceSchema);