const express = require('express');
const app = express();
const { User } = require('./schema');
const mongoose = require('mongoose');

app.get('/healthcheck', (req, res) => {
    res.send('pong');
});


app.use(express.json());
app.get('/healthcheck',(req,res)=>{
    res.send('pong')
})


app.post('/post', (req, res) => {
    const data = req.body; 
    res.json({ message: 'Data received successfully', data });
  });

app.use(express.json())
let connectionStatus = 'disconnected';

const startDatabase = async () => {
    try {
        await mongoose.connect('mongodb+srv://Admin:Admin@cluster0.lm8nxzv.mongodb.net/stock-market?retryWrites=true&w=majority&appName=Cluster0');
        connectionStatus = 'The database has been connected!!';
    } catch (err) {
        console.error('Failed to connect to database');
        connectionStatus = 'Failed to connect to database';
        console.log('error', err);
    }
};


app.get('/', (req, res) => {
    res.send(connectionStatus);
});

app.listen(3000, () => {
    startDatabase();
    console.log('Server is running on port 3000');
});

module.exports = app;
