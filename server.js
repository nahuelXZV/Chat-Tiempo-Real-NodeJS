const express = require('express');
const bodyParser = require('body-parser');
const router = require('./network/routes');
const db = require('./db');

db(); // Connect to database

const app = express(); // Create express app
app.use(bodyParser.json()); // Parse JSON body
router(app);        // Register routes

app.use('/app', express.static('public')); 

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
