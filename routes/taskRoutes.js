// routes/taskRoutes.js
const express = require('express');
const router = express.Router();
const taskController = require('../controller/taskController');

// Route untuk membuat tugas
router.post('/', taskController.createTask);

// Route untuk mendapatkan semua tugas
router.get('/', taskController.getTasks);

// Route untuk memperbarui tugas berdasarkan ID
router.put('/:id', taskController.updateTask);

// Route untuk menghapus tugas berdasarkan ID
router.delete('/:id', taskController.deleteTask);

module.exports = router;