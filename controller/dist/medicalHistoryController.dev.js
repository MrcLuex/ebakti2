"use strict";

// controllers/medicalHistoryController.js
var MedicalHistory = require('../models/MedicalHistory');

exports.createMedicalHistory = function _callee(req, res) {
  var _req$body, user_id, medical_condition, medication, allergies, newHistory;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, user_id = _req$body.user_id, medical_condition = _req$body.medical_condition, medication = _req$body.medication, allergies = _req$body.allergies;
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(MedicalHistory.create({
            user_id: user_id,
            medical_condition: medical_condition,
            medication: medication,
            allergies: allergies
          }));

        case 4:
          newHistory = _context.sent;
          return _context.abrupt("return", res.status(201).json({
            message: 'Medical history created successfully',
            history: newHistory
          }));

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](1);
          console.error("Error during medical history creation:", _context.t0.message);
          return _context.abrupt("return", res.status(500).json({
            message: 'Terjadi kesalahan saat membuat riwayat medis.',
            error: _context.t0
          }));

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 8]]);
};

exports.getMedicalHistories = function _callee2(req, res) {
  var histories;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(MedicalHistory.findAll());

        case 3:
          histories = _context2.sent;
          return _context2.abrupt("return", res.status(200).json(histories));

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          console.error("Error fetching medical histories:", _context2.t0.message);
          return _context2.abrupt("return", res.status(500).json({
            message: 'Terjadi kesalahan saat mengambil riwayat medis.',
            error: _context2.t0
          }));

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.updateMedicalHistory = function _callee3(req, res) {
  var id, _req$body2, medical_condition, medication, allergies, history;

  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          id = req.params.id;
          _req$body2 = req.body, medical_condition = _req$body2.medical_condition, medication = _req$body2.medication, allergies = _req$body2.allergies;
          _context3.prev = 2;
          _context3.next = 5;
          return regeneratorRuntime.awrap(MedicalHistory.findByPk(id));

        case 5:
          history = _context3.sent;

          if (history) {
            _context3.next = 8;
            break;
          }

          return _context3.abrupt("return", res.status(404).json({
            message: 'Medical history not found'
          }));

        case 8:
          _context3.next = 10;
          return regeneratorRuntime.awrap(history.update({
            medical_condition: medical_condition,
            medication: medication,
            allergies: allergies
          }));

        case 10:
          return _context3.abrupt("return", res.status(200).json({
            message: 'Medical history updated successfully',
            history: history
          }));

        case 13:
          _context3.prev = 13;
          _context3.t0 = _context3["catch"](2);
          console.error("Error during medical history update:", _context3.t0.message);
          return _context3.abrupt("return", res.status(500).json({
            message: 'Terjadi kesalahan saat memperbarui riwayat medis.',
            error: _context3.t0
          }));

        case 17:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[2, 13]]);
};

exports.deleteMedicalHistory = function _callee4(req, res) {
  var id, history;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          _context4.prev = 1;
          _context4.next = 4;
          return regeneratorRuntime.awrap(MedicalHistory.findByPk(id));

        case 4:
          history = _context4.sent;

          if (history) {
            _context4.next = 7;
            break;
          }

          return _context4.abrupt("return", res.status(404).json({
            message: 'Medical history not found'
          }));

        case 7:
          _context4.next = 9;
          return regeneratorRuntime.awrap(history.destroy());

        case 9:
          return _context4.abrupt("return", res.status(200).json({
            message: 'Medical history deleted successfully'
          }));

        case 12:
          _context4.prev = 12;
          _context4.t0 = _context4["catch"](1);
          console.error("Error during medical history deletion:", _context4.t0.message);
          return _context4.abrupt("return", res.status(500).json({
            message: 'Terjadi kesalahan saat menghapus riwayat medis.',
            error: _context4.t0
          }));

        case 16:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[1, 12]]);
};
//# sourceMappingURL=medicalHistoryController.dev.js.map
