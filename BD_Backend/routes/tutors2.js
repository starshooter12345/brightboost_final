const express = require('express');
const router = express.Router();
const Tutor = require('../models/Tutor');

router.get('/session-count', async (req, res) => {
    const { session } = req.query;

    try {
        const availabilityQuery = {};
        availabilityQuery[`tutorAvailability.${session}`] = true;

        const count = await Tutor.countDocuments(availabilityQuery);
        res.json({ count });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
