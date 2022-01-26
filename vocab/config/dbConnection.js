const mongoose = require('mongoose')
const dbDetails = require('./dbDetails')

const connectDB = async() =>{
    // Trying the connection 
    try{
        const con = await mongoose.connect(dbDetails.connectionURL,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        // If Connection is success 
        console.log("Connected to Database")
    }
    catch(error){
        console.error(error)
        process.exit(1)
    }
    
}

module.exports = connectDB