"use strict";

// routes/groupRoutes.js
var express = require('express');

var router = express.Router();

var groupController = require('../controller/groupController');

router.post('/', groupController.createGroup); // Ensure createGroup is defined in groupController
// Route untuk menambahkan peserta ke grup

router.post('/addParticipants', groupController.addParticipantsToGroup); // Route untuk mendapatkan semua grup

router.get('/', groupController.getGroups);
module.exports = router;
//# sourceMappingURL=groupRoutes.dev.js.map
