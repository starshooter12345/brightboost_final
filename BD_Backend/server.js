const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');  // Add this line
require('dotenv').config();



const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());  // Add this line to parse JSON requests
app.use(cors());  // Add this line to handle CORS

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log(err));


// Define Routes
app.use('/api/auth', require('./routes/auth'));  // Add this line

app.use('/api/questions', require('./routes/questions'));
app.use('/api/availability', require('./routes/availability'));
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
