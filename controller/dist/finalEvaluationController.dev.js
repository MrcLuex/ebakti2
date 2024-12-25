"use strict";

var _require = require('../config/db'),
    sequelize = _require.sequelize; // Import sequelize for raw queries


var FinalEvaluation = require('../models/FinalEvaluation');

var Certificate = require('../models/Certificate'); // Calculate and populate final evaluation scores


exports.calculateFinalEvaluations = function _callee(req, res) {
  var query, passedUsers, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, evaluation, existingCertificate;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          // Calculate scores and update final_evaluation table
          query = "\n      INSERT INTO final_evaluation (user_id, attendance_score, challenge_score, task_score, total_score, status)\n      SELECT \n        u.user_id,\n        (SUM(CASE \n          WHEN a.status = 'hadir' THEN 10\n          WHEN a.status = 'izin' THEN 5\n          ELSE 0\n        END) / COUNT(DISTINCT a.attendance_id)) AS attendance_score,\n        COALESCE(AVG(cs.score), 0) AS challenge_score,\n        COALESCE(AVG(ts.score), 0) AS task_score,\n        LEAST(\n          100,  -- Maximum score limit\n          ((SUM(CASE \n            WHEN a.status = 'hadir' THEN 10\n            WHEN a.status = 'izin' THEN 5\n            ELSE 0\n          END) / COUNT(DISTINCT a.attendance_id)) + \n          COALESCE(AVG(cs.score), 0) + \n          COALESCE(AVG(ts.score), 0))\n        ) AS total_score,\n        CASE \n          WHEN LEAST(\n            100, \n            ((SUM(CASE \n              WHEN a.status = 'hadir' THEN 10\n              WHEN a.status = 'izin' THEN 5\n              ELSE 0\n            END) / COUNT(DISTINCT a.attendance_id)) + \n            COALESCE(AVG(cs.score), 0) + \n            COALESCE(AVG(ts.score), 0))\n          ) >= 75 THEN 'pass'\n          ELSE 'fail'\n        END AS status\n      FROM user u\n      LEFT JOIN attendance a ON u.user_id = a.user_id\n      LEFT JOIN challenge_submission cs ON u.user_id = cs.user_id\n      LEFT JOIN task_submission ts ON u.user_id = ts.user_id\n      GROUP BY u.user_id\n      ON DUPLICATE KEY UPDATE \n        attendance_score = VALUES(attendance_score),\n        challenge_score = VALUES(challenge_score),\n        task_score = VALUES(task_score),\n        total_score = VALUES(total_score),\n        status = VALUES(status);\n    ";
          _context.next = 4;
          return regeneratorRuntime.awrap(sequelize.query(query));

        case 4:
          _context.next = 6;
          return regeneratorRuntime.awrap(FinalEvaluation.findAll({
            where: {
              status: 'pass'
            }
          }));

        case 6:
          passedUsers = _context.sent;
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context.prev = 10;
          _iterator = passedUsers[Symbol.iterator]();

        case 12:
          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
            _context.next = 23;
            break;
          }

          evaluation = _step.value;
          _context.next = 16;
          return regeneratorRuntime.awrap(Certificate.findOne({
            where: {
              user_id: evaluation.user_id
            }
          }));

        case 16:
          existingCertificate = _context.sent;

          if (existingCertificate) {
            _context.next = 20;
            break;
          }

          _context.next = 20;
          return regeneratorRuntime.awrap(Certificate.create({
            user_id: evaluation.user_id,
            issued_date: new Date(),
            certificate_url: "https://example.com/certificates/".concat(evaluation.user_id, ".pdf") // Example URL

          }));

        case 20:
          _iteratorNormalCompletion = true;
          _context.next = 12;
          break;

        case 23:
          _context.next = 29;
          break;

        case 25:
          _context.prev = 25;
          _context.t0 = _context["catch"](10);
          _didIteratorError = true;
          _iteratorError = _context.t0;

        case 29:
          _context.prev = 29;
          _context.prev = 30;

          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }

        case 32:
          _context.prev = 32;

          if (!_didIteratorError) {
            _context.next = 35;
            break;
          }

          throw _iteratorError;

        case 35:
          return _context.finish(32);

        case 36:
          return _context.finish(29);

        case 37:
          res.status(200).json({
            message: 'Final evaluations calculated and certificates generated for passed users.'
          });
          _context.next = 44;
          break;

        case 40:
          _context.prev = 40;
          _context.t1 = _context["catch"](0);
          console.error("Error during final evaluation calculation:", _context.t1.message);
          res.status(500).json({
            error: _context.t1.message
          });

        case 44:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 40], [10, 25, 29, 37], [30,, 32, 36]]);
};
//# sourceMappingURL=finalEvaluationController.dev.js.map
