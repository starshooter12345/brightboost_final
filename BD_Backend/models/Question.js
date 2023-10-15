// BD_Backend/models/Question.js

const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
    subject: {
        type: String,
        required: true
    },
    question: {
        type: String,
        required: true
    },
    session: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Question', QuestionSchema);
