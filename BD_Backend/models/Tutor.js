const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const TutorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    tutorExpertise: { type: [String], required: true, enum: ['Maths', 'Science', 'Media', 'Literature', 'Programming'] },
    tutorAvailability: {
        type: {
            monday: Boolean,
            tuesday: Boolean,
            wednesday: Boolean,
            thursday: Boolean,
            friday: Boolean
        },
        required: true
    }
});

TutorSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

module.exports = mongoose.model('tutors2', TutorSchema);
