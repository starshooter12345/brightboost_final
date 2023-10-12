const express = require('express');
const router = express.Router();
const Session = require('../models/Session');

router.post('/', async (req, res) => {
    const { tutorId, attendance } = req.body;

    try {
        const newSession = new Session({
            tutorId,
            attendance
        });

        await newSession.save();
        res.json(newSession);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;