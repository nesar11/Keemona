const mongoose = require('mongoose');
const userScheme =  new mongoose.Schema({
    Avatar_image :{type: String},
    First_Name:{type: String},
    Last_Name:{type: String},
    Company_Name:{type: String},
    Job_Title:{type: String},
    Email:{type: String},
    Telephone:{type: String},
    Country:{type: String},
    City:{type: String},
    Address: {type: String},
    Password:{type: String},
    Role:{type: String,
        default: "basic",
        enum: ["basic", "supervisor", "admin"]
    },

    accessToken: {
        String
        
    }



},{timestamps: true});

module.exports = mongoose.model('User', userScheme);