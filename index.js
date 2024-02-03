require('dotenv').config();
const express = require('express')  // requring express and storing it in express
const app = express()  // created an variable of express  // a powerfull variable
const port = 3000   // a port variable -- basically used to mention port

app.get('/', (req, res) => {  // get request from app to "/"(home) route 
    res.send('Hello World!')  // we will send the response
})

app.get('/twitter', (req, res) => {
    res.send({ "message": "Mehra is great" })
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})