// Imports
const express = require('express')
// Variables
const app = express()
const PORT = 3000 || process.env.PORT

// App Use Methods

app.get('/',(req,res) =>{
    res.send("Hello There")
})

// Running Application
app.listen(
    PORT, 
    () => {console.log(`Example app listening on port ${PORT}`)}
)