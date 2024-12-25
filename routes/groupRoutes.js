// routes/groupRoutes.js
const express = require('express');
const router = express.Router();
const groupController = require('../controller/groupController');

router.post('/', groupController.createGroup); // Ensure createGroup is defined in groupController
// Route untuk menambahkan peserta ke grup
router.post('/addParticipants', groupController.addParticipantsToGroup);

// Route untuk mendapatkan semua grup
router.get('/', groupController.getGroups);

module.exports = router;