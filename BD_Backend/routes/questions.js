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

// @route GET /api/questions
// @desc Get questions based on subject
// @access Public
router.get('/', async (req, res) => {
    const { subject } = req.query;
  
    try {
      const questions = await Question.find({ subject });
      res.json(questions);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  });
  

module.exports = router;
