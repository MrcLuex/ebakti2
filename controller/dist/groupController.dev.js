"use strict";

// controllers/groupController.js
var Group = require('../models/Group');

var Mentor = require('../models/Mentor');

var Period = require('../models/Period');

var User = require('../models/User'); // Exporting the functions directly


exports.createGroup = function _callee(req, res) {
  var _req$body, group_name, mentor1_id, mentor2_id, period_id, mentor1, mentor2, period, newGroup;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, group_name = _req$body.group_name, mentor1_id = _req$body.mentor1_id, mentor2_id = _req$body.mentor2_id, period_id = _req$body.period_id;
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(Mentor.findByPk(mentor1_id));

        case 4:
          mentor1 = _context.sent;
          _context.next = 7;
          return regeneratorRuntime.awrap(Mentor.findByPk(mentor2_id));

        case 7:
          mentor2 = _context.sent;
          _context.next = 10;
          return regeneratorRuntime.awrap(Period.findByPk(period_id));

        case 10:
          period = _context.sent;

          if (!(!mentor1 || !mentor2 || !period)) {
            _context.next = 13;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            message: 'Mentor atau periode tidak valid.'
          }));

        case 13:
          _context.next = 15;
          return regeneratorRuntime.awrap(Group.create({
            group_name: group_name,
            mentor1_id: mentor1_id,
            mentor2_id: mentor2_id
          }));

        case 15:
          newGroup = _context.sent;
          return _context.abrupt("return", res.status(201).json({
            message: 'Group created successfully',
            group: newGroup
          }));

        case 19:
          _context.prev = 19;
          _context.t0 = _context["catch"](1);
          console.error("Error during group creation:", _context.t0.message);
          return _context.abrupt("return", res.status(500).json({
            message: 'Terjadi kesalahan saat membuat grup.',
            error: _context.t0
          }));

        case 23:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 19]]);
};

exports.addParticipantsToGroup = function _callee2(req, res) {
  var _req$body2, group_id, user_ids, group, users;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _req$body2 = req.body, group_id = _req$body2.group_id, user_ids = _req$body2.user_ids; // user_ids is an array of user IDs

          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(Group.findByPk(group_id));

        case 4:
          group = _context2.sent;

          if (group) {
            _context2.next = 7;
            break;
          }

          return _context2.abrupt("return", res.status(404).json({
            message: 'Group tidak ditemukan.'
          }));

        case 7:
          _context2.next = 9;
          return regeneratorRuntime.awrap(User.findAll({
            where: {
              user_id: user_ids,
              role: 'peserta' // Ensure only participants are taken

            }
          }));

        case 9:
          users = _context2.sent;

          if (!(users.length === 0)) {
            _context2.next = 12;
            break;
          }

          return _context2.abrupt("return", res.status(400).json({
            message: 'Tidak ada pengguna yang valid untuk ditambahkan atau semua pengguna bukan peserta.'
          }));

        case 12:
          return _context2.abrupt("return", res.status(200).json({
            message: 'Pengguna berhasil ditambahkan ke grup.',
            group: group,
            participants: users
          }));

        case 15:
          _context2.prev = 15;
          _context2.t0 = _context2["catch"](1);
          console.error("Error during adding participants to group:", _context2.t0.message);
          return _context2.abrupt("return", res.status(500).json({
            message: 'Terjadi kesalahan saat menambahkan pengguna ke grup.',
            error: _context2.t0
          }));

        case 19:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 15]]);
};

exports.getGroups = function _callee3(req, res) {
  var groups;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(Group.findAll({
            include: [{
              model: Mentor
            }, {
              model: Period
            }]
          }));

        case 3:
          groups = _context3.sent;
          return _context3.abrupt("return", res.status(200).json(groups));

        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          console.error("Error fetching groups:", _context3.t0.message);
          return _context3.abrupt("return", res.status(500).json({
            message: 'Terjadi kesalahan saat mengambil grup.',
            error: _context3.t0
          }));

        case 11:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 7]]);
};
//# sourceMappingURL=groupController.dev.js.map
