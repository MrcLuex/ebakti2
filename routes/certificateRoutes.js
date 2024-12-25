const express = require('express');
const router = express.Router();
const certificateController = require('../controller/certificateController');

// Route to generate a certificate
router.post('/generate', certificateController.generateCertificate);

module.exports = router;