"use strict";

var express = require('express');

var router = express.Router();

var finalEvaluationController = require('../controller/finalEvaluationController'); // Route to calculate final evaluations and generate certificates


router.post('/calculate', finalEvaluationController.calculateFinalEvaluations);
module.exports = router;
//# sourceMappingURL=finalEvaluationRoutes.dev.js.map
