// routes/medicalHistoryRoutes.js
const express = require('express');
const router = express.Router();
const medicalHistoryController = require('../controller/medicalHistoryController');

// Route untuk membuat riwayat medis
router.post('/', medicalHistoryController.createMedicalHistory);

// Route untuk mendapatkan semua riwayat medis
router.get('/', medicalHistoryController.getMedicalHistories);

// Route untuk memperbarui riwayat medis berdasarkan ID
router.put('/:id', medicalHistoryController.updateMedicalHistory);

// Route untuk menghapus riwayat medis berdasarkan ID
router.delete('/:id', medicalHistoryController.deleteMedicalHistory);

module.exports = router;