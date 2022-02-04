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
            return res.status(404).json({exists:true})
        }
        else{
            const nUser = await newUser.save()
            res.status(201).json({message:"User Created Successfully"})
        }
        
        
    }
    catch (err) {
        res.status(400).json({message : err.message})
    }
})


// User Login 

router.post('/login',async (req,res) => {
    const user = await User.find({email:req.body.email})
    if(user == null){
        return res.status(400).send("User not found")
    }
    try{
        
       if(await bcrypt.compare(req.body.password,user[0].password))
       {
           res.status(202).send("Success")
       }
       else
       {
           res.status(404).send("Wrong Creds")
       }
    }catch(e){
        res.send(e.message)
    }
})

// User Exists or not 

router.post('/exists',async (req,res) => {
    try {
        const exists = await User.findOne({email:req.body.email}).select("email").lean()
        if(exists) {
            return res.status(200).json({exists:true})
        }
        else{
            return res.status(400).send("User Does not exists")
        }
        
        
    }
    catch (err) {
        res.status(400).json({message : err.message})
    }
})

//Exports 
module.exports = router