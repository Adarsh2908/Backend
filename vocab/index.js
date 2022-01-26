// Imports
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const dbConnection = require('./config/dbConnection')
const userRouter = require('./routes/userRouter')

// Variables
const app = express()
const PORT = 3000 || process.env.PORT

// Connecting to Database 

dbConnection()

// App Methods 
app.use(express.json())

//Routes 
app.use('/user',userRouter)

// Running Application
app.listen(
    PORT, 
    () => {console.log(`Example app listening on port ${PORT}`)}
)