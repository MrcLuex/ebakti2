const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Import Routes
const userRoutes = require('./routes/user');


// Use Routes
app.use('/api/users', userRoutes);



// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});