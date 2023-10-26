const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');  
require('dotenv').config();


const tutorRoutes = require('./routes/tutors2');

const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());  
app.use(cors());  


mongoose.connect(process.env.MONGO_URI, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log(err));



app.use('/api/auth', require('./routes/auth'));  

app.use('/api/questions', require('./routes/questions'));
app.use('/api/availability', require('./routes/availability'));


app.use('/api/tutors', tutorRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
