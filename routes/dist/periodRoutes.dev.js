"use strict";

// routes/periodRoutes.js
var express = require('express');

var router = express.Router();

var periodController = require('../controller/periodController'); // Ensure this path is correct
// Route to create a period


router.post('/', periodController.createPeriod); // Route to get all periods

router.get('/', periodController.getPeriods); // Route to update a period by ID

router.put('/:id', periodController.updatePeriod); // Route to delete a period by ID

router["delete"]('/:id', periodController.deletePeriod);
module.exports = router;
//# sourceMappingURL=periodRoutes.dev.js.map
