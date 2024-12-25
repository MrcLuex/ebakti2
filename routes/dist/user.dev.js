"use strict";

var express = require('express');

var _require = require('../controller/userController'),
    register = _require.register,
    login = _require.login; // Import controller


var router = express.Router();
router.post('/register', register); // Public

router.post('/login', login); // Public

module.exports = router;
//# sourceMappingURL=user.dev.js.map
