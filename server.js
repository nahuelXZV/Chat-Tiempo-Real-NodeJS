const express = require('express');
const app = express(); // Create express app
const server = require('http').Server(app); // Create http server

const socket = require('./socket');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./network/routes');
const db = require('./db');



socket.connect(server); // Connect socket to server
db(); // Connect to database
app.use(bodyParser.json()); // Parse JSON body
app.use(cors()); // Allow CORS
router(app);        // Register routes

app.use('/app', express.static('public'));
server.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
