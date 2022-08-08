const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    user: { type: String, required: true },
    message: { type: String, required: true },
    date: { type: Date, default: Date.now },
});

const model = mongoose.model('Message', mySchema);

module.exports = model;