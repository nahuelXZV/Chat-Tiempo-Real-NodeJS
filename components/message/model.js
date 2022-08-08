const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    user: { type: Schema.ObjectId, ref: "user", required: true },
    chat: { type: Schema.ObjectId, ref: "chat", required: true },
    message: { type: String, required: true },
    date: { type: Date, default: Date.now },
    file: { type: String, required: false },
});

const model = mongoose.model('Message', mySchema);

module.exports = model;