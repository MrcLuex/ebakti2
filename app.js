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
const periodRoutes = require('./routes/periodRoutes');
const taskRoutes = require('./routes/taskRoutes');
const taskSubmissionRoutes = require('./routes/taskSubmissionRoutes');
const mentorRoutes = require('./routes/mentorRoutes');
const medicalHistoryRoutes = require('./routes/medicalHistoryRoutes');
const groupRoutes = require('./routes/groupRoutes');
const finalEvaluationRoutes = require('./routes/finalEvaluationRoutes');
const challengeSubmissionRoutes = require('./routes/challengeSubmissionRoutes');
const challengeRoutes = require('./routes/challengeRoutes');
const certificateRoutes = require('./routes/certificateRoutes');
const attendanceRoutes = require('./routes/attendanceRoutes');

// Use Routes
app.use('/api/users', userRoutes);
app.use('/api/periods', periodRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/task-submissions', taskSubmissionRoutes);
app.use('/api/mentors', mentorRoutes);
app.use('/api/medical-histories', medicalHistoryRoutes);
app.use('/api/groups', groupRoutes);
app.use('/api/final-evaluations', finalEvaluationRoutes);
app.use('/api/challenge-submissions', challengeSubmissionRoutes);
app.use('/api/challenges', challengeRoutes);
app.use('/api/certificates', certificateRoutes);
app.use('/api/attendances', attendanceRoutes);

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});