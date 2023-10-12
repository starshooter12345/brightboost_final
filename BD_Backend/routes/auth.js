const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Tutor = require('../models/Tutor');

router.post('/login', async (req, res) => {
    console.log('Login Request Body:', req.body);
    const { email, password, role } = req.body;
    try {
        let user;
        console.log('About to find user/tutor by email');
        if(role === "Tutor") {
            user = await Tutor.findOne({ email });
        } else {
            user = await User.findOne({ email });
        }
        
        if (!user) {
            return res.status(400).json({ msg: 'Invalid Credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid Credentials' });
        }

        const payload = {
            user: {
                id: user.id
            }
        };
        
        jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
            if (err) throw err;
            res.json({ token });
        });
        console.log('User found:', user);
    } catch (err) {
        console.error('Error in /login:', err.message);
        res.status(500).send('Server error');
    }
});


router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }
        user = new User({
            name,
            email,
            password,
            isTutor: false
        });
        await user.save();
        const payload = {
            user: {
                id: user.id
            }
        };
        jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
            if (err) throw err;
            res.json({ token });
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

router.post('/register/tutor', async (req, res) => {
    const { name, email, password, tutorExpertise, tutorAvailability } = req.body;
    try {
        let tutor = await Tutor.findOne({ email });
        if (tutor) {
            return res.status(400).json({ msg: 'Tutor already exists' });
        }
        tutor = new Tutor({
            name,
            email,
            password,
            tutorExpertise,
            tutorAvailability

        });
        await tutor.save();
        const payload = {
            tutor: {
                id: tutor.id
            }
        };
        jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
            if (err) throw err;
            res.json({ token });
        });
    } catch (err) {
        console.error("Error in /register/tutor: ", err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;

