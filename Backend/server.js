const express = require('express')
const app = express()
const {User} = require("./schema")
const mongoose = require('mongoose')
require('dotenv').config()

app.get('/',(req,res)=>{
    res.send('server deployed')
})

app.use(express.json())
let connectionStatus = 'disconnected';

const startDatabase = async () => {
    try {
        await mongoose.connect(process.env.URI);
        connectionStatus = "The database has been connected!!";
    } catch (err) {
        console.error("Failed to connect to database");
        connectionStatus = "Failed to connect to database";
        console.log('error',err)
    }
};

app.get('/data',async(req,res)=>{
    try{
        const data = await User.find();
        console.log(data);
        res.json(data)
    }
    catch(err){
        res.status(500).send(err)
        console.log(err);
    }
})  
app.get('/',(req,res)=>{
    res.send(connectionStatus)
})

app.listen(3000,()=>{
    startDatabase()
    console.log('success')
})


module.exports = app