"use strict";

var Challenge = require('../models/Challenge'); // Create Challenge


exports.createChallenge = function _callee(req, res) {
  var _req$body, title, description, due_date, challenge_image, newChallenge;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, title = _req$body.title, description = _req$body.description, due_date = _req$body.due_date, challenge_image = _req$body.challenge_image;
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(Challenge.create({
            title: title,
            description: description,
            due_date: due_date,
            challenge_image: challenge_image
          }));

        case 4:
          newChallenge = _context.sent;
          res.status(201).json({
            message: 'Challenge created successfully',
            challenge: newChallenge
          });
          _context.next = 12;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](1);
          console.error("Error during challenge creation:", _context.t0.message);
          res.status(500).json({
            error: _context.t0.message
          });

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 8]]);
}; // Get All Challenges


exports.getChallenges = function _callee2(req, res) {
  var challenges;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(Challenge.findAll());

        case 3:
          challenges = _context2.sent;
          res.status(200).json(challenges);
          _context2.next = 11;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          console.error("Error fetching challenges:", _context2.t0.message);
          res.status(500).json({
            error: _context2.t0.message
          });

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
}; // Update Challenge


exports.updateChallenge = function _callee3(req, res) {
  var id, _req$body2, title, description, due_date, challenge_image, challenge;

  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          id = req.params.id;
          _req$body2 = req.body, title = _req$body2.title, description = _req$body2.description, due_date = _req$body2.due_date, challenge_image = _req$body2.challenge_image;
          _context3.prev = 2;
          _context3.next = 5;
          return regeneratorRuntime.awrap(Challenge.findByPk(id));

        case 5:
          challenge = _context3.sent;

          if (challenge) {
            _context3.next = 8;
            break;
          }

          return _context3.abrupt("return", res.status(404).json({
            error: 'Challenge not found'
          }));

        case 8:
          _context3.next = 10;
          return regeneratorRuntime.awrap(challenge.update({
            title: title,
            description: description,
            due_date: due_date,
            challenge_image: challenge_image
          }));

        case 10:
          res.status(200).json({
            message: 'Challenge updated successfully',
            challenge: challenge
          });
          _context3.next = 17;
          break;

        case 13:
          _context3.prev = 13;
          _context3.t0 = _context3["catch"](2);
          console.error("Error during challenge update:", _context3.t0.message);
          res.status(500).json({
            error: _context3.t0.message
          });

        case 17:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[2, 13]]);
}; // Delete Challenge


exports.deleteChallenge = function _callee4(req, res) {
  var id, challenge;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          _context4.prev = 1;
          _context4.next = 4;
          return regeneratorRuntime.awrap(Challenge.findByPk(id));

        case 4:
          challenge = _context4.sent;

          if (challenge) {
            _context4.next = 7;
            break;
          }

          return _context4.abrupt("return", res.status(404).json({
            error: 'Challenge not found'
          }));

        case 7:
          _context4.next = 9;
          return regeneratorRuntime.awrap(challenge.destroy());

        case 9:
          res.status(200).json({
            message: 'Challenge deleted successfully'
          });
          _context4.next = 16;
          break;

        case 12:
          _context4.prev = 12;
          _context4.t0 = _context4["catch"](1);
          console.error("Error during challenge deletion:", _context4.t0.message);
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
//# sourceMappingURL=challengeController.dev.js.map
