"use strict";

// routes/taskRoutes.js
var express = require('express');

var router = express.Router();

var taskController = require('../controller/taskController'); // Route untuk membuat tugas


router.post('/', taskController.createTask); // Route untuk mendapatkan semua tugas

router.get('/', taskController.getTasks); // Route untuk memperbarui tugas berdasarkan ID

router.put('/:id', taskController.updateTask); // Route untuk menghapus tugas berdasarkan ID

router["delete"]('/:id', taskController.deleteTask);
module.exports = router;
//# sourceMappingURL=taskRoutes.dev.js.map
