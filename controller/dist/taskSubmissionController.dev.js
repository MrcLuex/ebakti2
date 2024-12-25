"use strict";

// controllers/taskSubmissionController.js
var TaskSubmission = require('../models/TaskSubmission');

exports.createTaskSubmission = function _callee(req, res) {
  var _req$body, task_id, user_id, submission_date, score, feedback, status, newSubmission;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, task_id = _req$body.task_id, user_id = _req$body.user_id, submission_date = _req$body.submission_date, score = _req$body.score, feedback = _req$body.feedback, status = _req$body.status;
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(TaskSubmission.create({
            task_id: task_id,
            user_id: user_id,
            submission_date: submission_date,
            score: score,
            feedback: feedback,
            status: status
          }));

        case 4:
          newSubmission = _context.sent;
          return _context.abrupt("return", res.status(201).json({
            message: 'Task submission created successfully',
            submission: newSubmission
          }));

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](1);
          console.error("Error during task submission creation:", _context.t0.message);
          return _context.abrupt("return", res.status(500).json({
            message: 'Terjadi kesalahan saat membuat pengumpulan tugas.',
            error: _context.t0
          }));

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 8]]);
};

exports.getTaskSubmissions = function _callee2(req, res) {
  var submissions;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(TaskSubmission.findAll());

        case 3:
          submissions = _context2.sent;
          return _context2.abrupt("return", res.status(200).json(submissions));

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          console.error("Error fetching task submissions:", _context2.t0.message);
          return _context2.abrupt("return", res.status(500).json({
            message: 'Terjadi kesalahan saat mengambil pengumpulan tugas.',
            error: _context2.t0
          }));

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.updateTaskSubmission = function _callee3(req, res) {
  var id, _req$body2, task_id, user_id, submission_date, score, feedback, status, submission;

  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          id = req.params.id;
          _req$body2 = req.body, task_id = _req$body2.task_id, user_id = _req$body2.user_id, submission_date = _req$body2.submission_date, score = _req$body2.score, feedback = _req$body2.feedback, status = _req$body2.status;
          _context3.prev = 2;
          _context3.next = 5;
          return regeneratorRuntime.awrap(TaskSubmission.findByPk(id));

        case 5:
          submission = _context3.sent;

          if (submission) {
            _context3.next = 8;
            break;
          }

          return _context3.abrupt("return", res.status(404).json({
            message: 'Task submission not found'
          }));

        case 8:
          _context3.next = 10;
          return regeneratorRuntime.awrap(submission.update({
            task_id: task_id,
            user_id: user_id,
            submission_date: submission_date,
            score: score,
            feedback: feedback,
            status: status
          }));

        case 10:
          return _context3.abrupt("return", res.status(200).json({
            message: 'Task submission updated successfully',
            submission: submission
          }));

        case 13:
          _context3.prev = 13;
          _context3.t0 = _context3["catch"](2);
          console.error("Error during task submission update:", _context3.t0.message);
          return _context3.abrupt("return", res.status(500).json({
            message: 'Terjadi kesalahan saat memperbarui pengumpulan tugas.',
            error: _context3.t0
          }));

        case 17:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[2, 13]]);
};

exports.deleteTaskSubmission = function _callee4(req, res) {
  var id, submission;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          _context4.prev = 1;
          _context4.next = 4;
          return regeneratorRuntime.awrap(TaskSubmission.findByPk(id));

        case 4:
          submission = _context4.sent;

          if (submission) {
            _context4.next = 7;
            break;
          }

          return _context4.abrupt("return", res.status(404).json({
            message: 'Task submission not found'
          }));

        case 7:
          _context4.next = 9;
          return regeneratorRuntime.awrap(submission.destroy());

        case 9:
          return _context4.abrupt("return", res.status(200).json({
            message: 'Task submission deleted successfully'
          }));

        case 12:
          _context4.prev = 12;
          _context4.t0 = _context4["catch"](1);
          console.error("Error during task submission deletion:", _context4.t0.message);
          return _context4.abrupt("return", res.status(500).json({
            message: 'Terjadi kesalahan saat menghapus pengumpulan tugas.',
            error: _context4.t0
          }));

        case 16:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[1, 12]]);
};
//# sourceMappingURL=taskSubmissionController.dev.js.map
