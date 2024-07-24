const express = require('express');
const app = express();
const { User } = require('./schema');
const mongoose = require('mongoose');

app.get('/healthcheck', (req, res) => {
    res.send('pong');
});

app.use(express.json());
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

app.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).send(err);
        console.log(err);
    }
});

app.post('/users', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json({ message: 'data added', user });
    } catch (err) {
        res.status(500).send(err);
        console.log(err);
    }
});

app.put('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user) {
            return res.status(404).send('User not found');
        }
        res.json({ message: 'entity updated', user });
    } catch (err) {
        res.status(500).send(err);
        console.log(err);
    }
});


app.get('/', (req, res) => {
    res.send(connectionStatus);
});

app.listen(3000, () => {
    startDatabase();
    console.log('Server is running on port 3000');
});

module.exports = app;
