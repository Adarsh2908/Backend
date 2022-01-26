// Imports
const express = require('express');
const router = express.Router();
const User = require('../models/userModel')
const bcrypt = require('bcrypt')
// Routes 

// Create User Method
router.post('/',async (req,res) => {
    
    // Data Received 
   const Email = req.body.email
   const Password = await bcrypt.hash(req.body.password,10)
   const DateOfBirth = req.body.dateofBirth
   const FirstName = req.body.firstName
   const LastName = req.body.lastName || null
   const Streak = req.body.streak
   const MissedDays = req.body.missedDays

    
    const newUser = new User({
        
        email: Email,
        password:Password,
        dateofBirth: DateOfBirth,
        firstName:FirstName,
        lastName : LastName,
        streak:Streak,
        missedDays:MissedDays

    })
    
    try {
        // Check if Email Exists 
        const exists = await User.findOne({email:Email}).select("email").lean()
        if(exists) {
            res.status(400).json({message: "User already exists",response:"1"})
        }
        else{
            const nUser = await newUser.save()
            res.status(201).json(nUser)
        }
        
        
    }
    catch (err) {
        res.status(400).json({message : err.message})
    }
})
// Get User 
router.get('/',async (req,res) => {
   try {
    

   }
   catch (err) {
    res.status(500).json({message:err.message})
   }
})

//Exports 
module.exports = router