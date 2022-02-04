// Imports
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const dbConnection = require('./config/dbConnection')
const userRouter = require('./routes/userRouter')
const bodyParser = require('body-parser')

// Variables
const app = express()
const PORT = process.env.PORT


// App Methods 
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
// Connecting to Database 

dbConnection()

app.get('/', (req, res) =>{
    res.send("Hello There")
})

//Routes 
app.use('/user',userRouter)

// Running Application
app.listen(
    PORT, 
    () => {console.log(`Example app listening on port ${PORT}`)}
)