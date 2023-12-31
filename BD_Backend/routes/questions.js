const express = require('express');
const router = express.Router();
const Question = require('../models/Question');


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
  

router.get('/session-count', async (req, res) => {
    const { session } = req.query;

    try {
        const count = await Question.countDocuments({ session });
        res.json({ count });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;