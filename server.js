const express = require('express');
const bodyParser = require('body-parser');
const router = require('./network/routes');
const db = require('./db');

db();

const app = express();
app.use(bodyParser.json());
router(app);

app.use('/app', express.static('public'));

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
