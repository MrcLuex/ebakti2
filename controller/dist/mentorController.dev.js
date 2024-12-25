"use strict";

// controllers/mentorController.js
var Mentor = require('../models/Mentor');

exports.createMentor = function _callee(req, res) {
  var name, newMentor;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          name = req.body.name;
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(Mentor.create({
            name: name
          }));

        case 4:
          newMentor = _context.sent;
          return _context.abrupt("return", res.status(201).json({
            message: 'Mentor created successfully',
            mentor: newMentor
          }));

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](1);
          console.error("Error during mentor creation:", _context.t0.message);
          return _context.abrupt("return", res.status(500).json({
            message: 'Terjadi kesalahan saat membuat mentor.',
            error: _context.t0
          }));

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 8]]);
};

exports.getMentors = function _callee2(req, res) {
  var mentors;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(Mentor.findAll());

        case 3:
          mentors = _context2.sent;
          return _context2.abrupt("return", res.status(200).json(mentors));

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          console.error("Error fetching mentors:", _context2.t0.message);
          return _context2.abrupt("return", res.status(500).json({
            message: 'Terjadi kesalahan saat mengambil mentor.',
            error: _context2.t0
          }));

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.updateMentor = function _callee3(req, res) {
  var id, name, mentor;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          id = req.params.id;
          name = req.body.name;
          _context3.prev = 2;
          _context3.next = 5;
          return regeneratorRuntime.awrap(Mentor.findByPk(id));

        case 5:
          mentor = _context3.sent;

          if (mentor) {
            _context3.next = 8;
            break;
          }

          return _context3.abrupt("return", res.status(404).json({
            message: 'Mentor not found'
          }));

        case 8:
          _context3.next = 10;
          return regeneratorRuntime.awrap(mentor.update({
            name: name
          }));

        case 10:
          return _context3.abrupt("return", res.status(200).json({
            message: 'Mentor updated successfully',
            mentor: mentor
          }));

        case 13:
          _context3.prev = 13;
          _context3.t0 = _context3["catch"](2);
          console.error("Error during mentor update:", _context3.t0.message);
          return _context3.abrupt("return", res.status(500).json({
            message: 'Terjadi kesalahan saat memperbarui mentor.',
            error: _context3.t0
          }));

        case 17:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[2, 13]]);
};

exports.deleteMentor = function _callee4(req, res) {
  var id, mentor;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          _context4.prev = 1;
          _context4.next = 4;
          return regeneratorRuntime.awrap(Mentor.findByPk(id));

        case 4:
          mentor = _context4.sent;

          if (mentor) {
            _context4.next = 7;
            break;
          }

          return _context4.abrupt("return", res.status(404).json({
            message: 'Mentor not found'
          }));

        case 7:
          _context4.next = 9;
          return regeneratorRuntime.awrap(mentor.destroy());

        case 9:
          return _context4.abrupt("return", res.status(200).json({
            message: 'Mentor deleted successfully'
          }));

        case 12:
          _context4.prev = 12;
          _context4.t0 = _context4["catch"](1);
          console.error("Error during mentor deletion:", _context4.t0.message);
          return _context4.abrupt("return", res.status(500).json({
            message: 'Terjadi kesalahan saat menghapus mentor.',
            error: _context4.t0
          }));

        case 16:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[1, 12]]);
};
//# sourceMappingURL=mentorController.dev.js.map
