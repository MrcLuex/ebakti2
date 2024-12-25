// routes/taskSubmissionRoutes.js
const express = require('express');
const router = express.Router();
const taskSubmissionController = require('../controller/taskSubmissionController');

// Route untuk membuat pengumpulan tugas
router.post('/', taskSubmissionController.createTaskSubmission);

// Route untuk mendapatkan semua pengumpulan tugas
router.get('/', taskSubmissionController.getTaskSubmissions);

// Route untuk memperbarui pengumpulan tugas berdasarkan ID
router.put('/:id', taskSubmissionController.updateTaskSubmission); // Perbaikan dilakukan di sini

// Route untuk menghapus pengumpulan tugas berdasarkan ID
router.delete('/:id', taskSubmissionController.deleteTaskSubmission); // Menambahkan route untuk menghapus

module.exports = router;