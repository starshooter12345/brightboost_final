// BD_Backend/routes/questions.js

const express = require('express');
const router = express.Router();
const Question = require('../models/Question');

// @route POST /api/questions
// @desc Submit a question
// @access Public
router.post('/', async (req, res) => {
    const { subject, question, session } = req.body;

    try {
        const newQuestion = new Question({
            subject,
            question,
            session
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
// router.get('/', async (req, res) => {
//     const { subject } = req.query;
  
//     try {
//       const questions = await Question.find({ subject });
//       res.json(questions);
//     } catch (err) {
//       console.error(err.message);
//       res.status(500).send('Server error');
//     }
//   });

router.get('/', async (req, res) => {
  const { subject, session } = req.query;

  try {
      const questions = await Question.find({ subject, session });
      
      if (questions.length === 0) {
          return res.status(404).send('Question not found');
      }

      res.json(questions);
  } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
  }
});

// @route PUT /api/questions/:id/answer
// @desc Mark a question as answered
// @access Public
router.put('/:id/answer', async (req, res) => {
    try {
        const question = await Question.findById(req.params.id);
        if (!question) {
            return res.status(404).send('Question not found');
        }

        question.isAnswered = true;
        await question.save();

        res.json(question);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error: ' + err.message);
    }
});

// @route GET /api/questions/answered-count
// @desc Get the count of answered questions for a specific subject and session
// @access Public
router.get('/answered-count', async (req, res) => {
    const { subject, session } = req.query;
  
    try {
        const count = await Question.countDocuments({ subject, session, isAnswered: true });
        res.json({ count });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
  });
  

  

module.exports = router;
