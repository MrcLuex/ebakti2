"use strict";

var express = require('express');

var router = express.Router();

var certificateController = require('../controller/certificateController'); // Route to generate a certificate


router.post('/generate', certificateController.generateCertificate);
module.exports = router;
//# sourceMappingURL=certificateRoutes.dev.js.map
