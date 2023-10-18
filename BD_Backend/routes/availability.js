const express = require('express');
const router = express.Router();
const Tutor = require('../models/Tutor'); // Adjust the path based on where your Tutor model is located

// @route GET /api/tutors/availability
// @desc Get tutors based on subject and availability
// @access Public
router.get('/availability', async (req, res) => {
    const { subject, session } = req.query;
    
    try {
        const query = {
            tutorExpertise: subject,
        };
        query[`tutorAvailability.${session}`] = true;

        const tutors = await Tutor.find(query);
        res.json(tutors);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
