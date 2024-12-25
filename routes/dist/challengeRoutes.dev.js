"use strict";

var express = require('express');

var router = express.Router();

var challengeController = require('../controller/challengeController'); // Routes for Challenge


router.post('/', challengeController.createChallenge); // Create Challenge

router.get('/', challengeController.getChallenges); // Get All Challenges

router.put('/:id', challengeController.updateChallenge); // Update Challenge by ID

router["delete"]('/:id', challengeController.deleteChallenge); // Delete Challenge by ID

module.exports = router;
//# sourceMappingURL=challengeRoutes.dev.js.map
