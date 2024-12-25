const express = require('express');
const router = express.Router();
const attendanceController = require('../controller/attendanceController');

// Routes for Attendance
router.post('/', attendanceController.createAttendance); // Create Attendance
router.get('/', attendanceController.getAttendance); // Get All Attendance Records
router.put('/:id', attendanceController.updateAttendance); // Update Attendance by ID
router.delete('/:id', attendanceController.deleteAttendance); // Delete Attendance by ID

module.exports = router;