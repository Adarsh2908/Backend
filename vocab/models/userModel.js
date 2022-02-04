// Imports
const mongoose = require('mongoose');

// Variables 

// Schema 
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required:true,
        lowercase: true,
        unique:true
    },
    password: {
        type: String,
        required:true
    },
    dateofBirth: {
        type: String,
        required:true
        
    },
    firstName: {
        type: String,
        required:true
        
    },
    lastName: {
        type: String,
        
    },
    streak: {
        type:String,
        required:true
    },
    missedDays:{
        type:String,
        required:true
    }
})

// Exporting Modules 

module.exports = mongoose.model('User',userSchema);