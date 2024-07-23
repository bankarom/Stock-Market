const express = require('express')
const app = express()
const {User} = require("./schema")
const mongoose = require('mongoose')


app.get('/healthcheck',(req,res)=>{
    res.send('pong')
})

app.use(express.json())
let connectionStatus = 'disconnected';

 
app.get('/',(req,res)=>{
    res.send(connectionStatus)
})

app.listen(3000,()=>{
    startDatabase()
    console.log('success')
})


module.exports = app