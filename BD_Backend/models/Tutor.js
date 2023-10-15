// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

// const TutorSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true
//     },

//     password: {
//         type: String,
//         required: true
//     },

// });

// TutorSchema.pre('save', async function(next) {
//     try {
//         if (!this.isModified('password')) {
//             return next();
//         }
//         this.password = await bcrypt.hash(this.password, 10);
//         next();
//     } catch (err) {
//         console.error("Error hashing password: ", err);
//         next(err);
//     }
// });


// module.exports = mongoose.model('Tutor', TutorSchema);

// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

// const TutorSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     tutorExpertise: { type: [String], required: true, enum: ['Maths', 'Science', 'IT', 'Literature', 'Programming'] },
//     tutorAvailability: {
//         type: {
//             monday: String,
//             tuesday: String,
//             wednesday: String,
//             thursday: String,
//             friday: String
//         },
//         required: true
//     }
// });

// TutorSchema.pre('save', async function(next) {
//     if (!this.isModified('password')) return next();
//     this.password = await bcrypt.hash(this.password, 10);
//     next();
// });

// module.exports = mongoose.model('Tutor', TutorSchema);

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
