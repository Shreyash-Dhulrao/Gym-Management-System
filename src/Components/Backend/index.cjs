const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/mydatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
    firstName: String,
    username: { type: String, unique: true },
    password: String,
});

const User = mongoose.model('User', userSchema);

// Routes
app.post('../Login', async (req, res) => {
    const { firstName, username, password } = req.body;
    const newUser = new User({ firstName, username, password });
    try {
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(400).json({ message: 'Error registering user' }); // Send generic error message or more specific details based on the error
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
