const mongoose = require('mongoose');
const serviceSchema = new mongoose.Schema({
    serviceName : {type: String},
    serviceKeeCode: {type: String},
    description: {type: String},
    specifications: {type: String},
    moreInfo: {type: String}

},{timestamps: true});

module.exports = mongoose.model('Service', serviceSchema);