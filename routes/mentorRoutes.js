// routes/mentorRoutes.js
const express = require('express');
const router = express.Router();
const mentorController = require('../controller/mentorController');

// Route untuk membuat mentor
router.post('/', mentorController.createMentor);

// Route untuk mendapatkan semua mentor
router.get('/', mentorController.getMentors);

// Route untuk memperbarui mentor berdasarkan ID
router.put('/:id', mentorController.updateMentor);

// Route untuk menghapus mentor berdasarkan ID
router.delete('/:id', mentorController.deleteMentor);

module.exports = router;