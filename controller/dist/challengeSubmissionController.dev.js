"use strict";

var ChallengeSubmission = require('../models/ChallengeSubmission'); // Create Challenge Submission


exports.createChallengeSubmission = function _callee(req, res) {
  var _req$body, challenge_id, user_id, submission_file, status, newSubmission;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, challenge_id = _req$body.challenge_id, user_id = _req$body.user_id, submission_file = _req$body.submission_file, status = _req$body.status;
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(ChallengeSubmission.create({
            challenge_id: challenge_id,
            user_id: user_id,
            submission_file: submission_file,
            status: status
          }));

        case 4:
          newSubmission = _context.sent;
          res.status(201).json({
            message: 'Challenge submission created successfully',
            submission: newSubmission
          });
          _context.next = 12;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](1);
          console.error("Error during challenge submission creation:", _context.t0.message);
          res.status(500).json({
            error: _context.t0.message
          });

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 8]]);
}; // Get All Challenge Submissions


exports.getChallengeSubmissions = function _callee2(req, res) {
  var submissions;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(ChallengeSubmission.findAll());

        case 3:
          submissions = _context2.sent;
          res.status(200).json(submissions);
          _context2.next = 11;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          console.error("Error fetching challenge submissions:", _context2.t0.message);
          res.status(500).json({
            error: _context2.t0.message
          });

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
}; // Update Challenge Submission


exports.updateChallengeSubmission = function _callee3(req, res) {
  var id, _req$body2, challenge_id, user_id, submission_file, status, submission;

  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          id = req.params.id;
          _req$body2 = req.body, challenge_id = _req$body2.challenge_id, user_id = _req$body2.user_id, submission_file = _req$body2.submission_file, status = _req$body2.status;
          _context3.prev = 2;
          _context3.next = 5;
          return regeneratorRuntime.awrap(ChallengeSubmission.findByPk(id));

        case 5:
          submission = _context3.sent;

          if (submission) {
            _context3.next = 8;
            break;
          }

          return _context3.abrupt("return", res.status(404).json({
            error: 'Challenge submission not found'
          }));

        case 8:
          _context3.next = 10;
          return regeneratorRuntime.awrap(submission.update({
            challenge_id: challenge_id,
            user_id: user_id,
            submission_file: submission_file,
            status: status
          }));

        case 10:
          res.status(200).json({
            message: 'Challenge submission updated successfully',
            submission: submission
          });
          _context3.next = 17;
          break;

        case 13:
          _context3.prev = 13;
          _context3.t0 = _context3["catch"](2);
          console.error("Error during challenge submission update:", _context3.t0.message);
          res.status(500).json({
            error: _context3.t0.message
          });

        case 17:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[2, 13]]);
}; // Delete Challenge Submission


exports.deleteChallengeSubmission = function _callee4(req, res) {
  var id, submission;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          _context4.prev = 1;
          _context4.next = 4;
          return regeneratorRuntime.awrap(ChallengeSubmission.findByPk(id));

        case 4:
          submission = _context4.sent;

          if (submission) {
            _context4.next = 7;
            break;
          }

          return _context4.abrupt("return", res.status(404).json({
            error: 'Challenge submission not found'
          }));

        case 7:
          _context4.next = 9;
          return regeneratorRuntime.awrap(submission.destroy());

        case 9:
          res.status(200).json({
            message: 'Challenge submission deleted successfully'
          });
          _context4.next = 16;
          break;

        case 12:
          _context4.prev = 12;
          _context4.t0 = _context4["catch"](1);
          console.error("Error during challenge submission deletion:", _context4.t0.message);
          res.status(500).json({
            error: _context4.t0.message
          });

        case 16:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[1, 12]]);
};
//# sourceMappingURL=challengeSubmissionController.dev.js.map
