"use strict";

var express = require('express');

var router = express.Router();

var challengeSubmissionController = require('../controller/challengeSubmissionController'); // Routes for Challenge Submission


router.post('/', challengeSubmissionController.createChallengeSubmission); // Create Challenge Submission

router.get('/', challengeSubmissionController.getChallengeSubmissions); // Get All Challenge Submissions

router.put('/:id', challengeSubmissionController.updateChallengeSubmission); // Update Challenge Submission by ID

router["delete"]('/:id', challengeSubmissionController.deleteChallengeSubmission); // Delete Challenge Submission by ID

module.exports = router;
//# sourceMappingURL=challengeSubmissionRoutes.dev.js.map
