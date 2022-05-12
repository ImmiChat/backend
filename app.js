const express = require('express')
const path = require('path')
const authRoutes = require('./routes/AuthRouter');
const cors = require('cors');
const app = express()

//const dbpool = require(./dbconfig)

//This is the port 
const PORT = 8000

//middleware
app.use(express.json())
app.use(cors());
app.use(authRoutes);

app.get('/', (req, res) => {
    res.status(200).send('Testing Testing 1 2 3')
})




//Listen to the port
app.listen(PORT, () => {
    console.log('Server is running on port 8000')
})