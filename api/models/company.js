const mongooose = require('mongoose');

const companySchema = new mongooose.Schema({
    company_name: {type:String},
    company_logo: {type:String},
    client_Kee_Code: {type:String},
    country: {type:String},
    city: {type:String},
    address: {type:String},
    website: {type:String},
    telephone: {type:Number},
    industry: {type:String},
    company_description: {type:String},
    year_established: {type: Number}

},{timestamps:true});

module.exports = mongooose.model('Company', companySchema);