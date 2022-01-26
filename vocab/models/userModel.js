// Imports
const mongoose = require('mongoose');

// Variables 

// Schema 
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required:true,
        lowercase: true,
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
        type:Number,
        required:true
    },
    missedDays:{
        type:Number,
        required:true
    }
})

// Exporting Modules 

module.exports = mongoose.model('User',userSchema);