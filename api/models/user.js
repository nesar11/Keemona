// server/models/userModel.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const UserSchema = new Schema({
    email: {
      type: String,
      required: true,
      trim: true
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: String,
      default: 'basic',
      enum: ["basic", "supervisor", "admin"]
    },
    isActive: {
      type: Boolean,
      default: 'true',
      
    },
    accessToken: {
      type: String
    }
  },{timestamps:true})
  
 
const User = mongoose.model('user', UserSchema);
 
module.exports = User;