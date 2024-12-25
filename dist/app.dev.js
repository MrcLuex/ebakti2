"use strict";

var express = require('express');

var bodyParser = require('body-parser');

var cors = require('cors');

var dotenv = require('dotenv'); // Load environment variables from .env file


dotenv.config();
var app = express();
var PORT = process.env.PORT || 3000; // Middleware

app.use(cors());
app.use(bodyParser.json()); // Import Routes

var userRoutes = require('./routes/user');

var periodRoutes = require('./routes/periodRoutes');

var taskRoutes = require('./routes/taskRoutes');

var taskSubmissionRoutes = require('./routes/taskSubmissionRoutes');

var mentorRoutes = require('./routes/mentorRoutes');

var medicalHistoryRoutes = require('./routes/medicalHistoryRoutes');

var groupRoutes = require('./routes/groupRoutes');

var finalEvaluationRoutes = require('./routes/finalEvaluationRoutes');

var challengeSubmissionRoutes = require('./routes/challengeSubmissionRoutes');

var challengeRoutes = require('./routes/challengeRoutes');

var certificateRoutes = require('./routes/certificateRoutes');

var attendanceRoutes = require('./routes/attendanceRoutes'); // Use Routes


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
app.use('/api/attendances', attendanceRoutes); // Start Server

app.listen(PORT, function () {
  console.log("Server is running on port ".concat(PORT));
});
//# sourceMappingURL=app.dev.js.map
