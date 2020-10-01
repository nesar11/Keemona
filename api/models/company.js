const mongooose = require('mongoose');

const companySchema = new mongooose.Schema({
    companyName: {type:String},
    companyLogo: {type:String},
    clientKeeCode: {type:String},
    country: {type:String},
    city: {type:String},
    address: {type:String},
    website: {type:String},
    telephone: {type:Number},
    industry: {type:String},
    companyDestn: {type:String},
    yearEst: {type: Number}

},{timestamps:true});

module.exports = mongooose.model('Company', companySchema);