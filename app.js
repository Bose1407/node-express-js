const express = require('express');
const fs = require('fs');
const path = require('path');
const data = require('./data'); // Assuming this is where your data is stored

const app = express();

// Middleware to serve static files from './public' directory
app.use(express.static('./public'));

// Route to get all users with limited fields
app.get('/values', (req, res) => {
    const users = data.map((val) => {
        const { id, name, email } = val;
        return { id, name, email };
    });

    res.send(users);
});

// Route to get user by id
app.get('/values/:user_id', (req, res) => {
    const userId = req.params.user_id; // Corrected variable name to match route parameter

    const user = data.find((val) => val.id === Number(userId));

    if (!user) {
        res.status(404).send('User not found');
    } else {
        res.send(user);
    }
});

// Start the server
app.listen(5000, () => {
    console.log("The app is running on port 5000");
});
