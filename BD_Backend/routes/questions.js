// BD_Backend/routes/questions.js

const express = require('express');
const router = express.Router();
const Question = require('../models/Question');

// @route POST /api/questions
// @desc Submit a question
// @access Public
router.post('/', async (req, res) => {
    const { subject, question } = req.body;

    try {
        const newQuestion = new Question({
            subject,
            question
        });

        await newQuestion.save();
        res.json(newQuestion);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
