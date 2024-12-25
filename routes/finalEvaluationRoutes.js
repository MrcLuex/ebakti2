const express = require('express');
const router = express.Router();
const finalEvaluationController = require('../controller/finalEvaluationController');

// Route to calculate final evaluations and generate certificates
router.post('/calculate', finalEvaluationController.calculateFinalEvaluations);

module.exports = router;