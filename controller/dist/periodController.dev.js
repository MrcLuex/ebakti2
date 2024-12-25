"use strict";

// controllers/periodController.js
var Period = require('../models/Period');

exports.createPeriod = function _callee(req, res) {
  var _req$body, period_name, start_date, end_date, newPeriod;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, period_name = _req$body.period_name, start_date = _req$body.start_date, end_date = _req$body.end_date;
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(Period.create({
            period_name: period_name,
            start_date: start_date,
            end_date: end_date
          }));

        case 4:
          newPeriod = _context.sent;
          return _context.abrupt("return", res.status(201).json({
            message: 'Period created successfully',
            period: newPeriod
          }));

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](1);
          console.error("Error during period creation:", _context.t0.message);
          return _context.abrupt("return", res.status(500).json({
            message: 'Error creating period.',
            error: _context.t0.message
          }));

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 8]]);
};

exports.getPeriods = function _callee2(req, res) {
  var periods;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(Period.findAll());

        case 3:
          periods = _context2.sent;
          return _context2.abrupt("return", res.status(200).json(periods));

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          console.error("Error fetching periods:", _context2.t0.message);
          return _context2.abrupt("return", res.status(500).json({
            message: 'Error fetching periods.',
            error: _context2.t0.message
          }));

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.updatePeriod = function _callee3(req, res) {
  var id, _req$body2, period_name, start_date, end_date, period;

  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          id = req.params.id;
          _req$body2 = req.body, period_name = _req$body2.period_name, start_date = _req$body2.start_date, end_date = _req$body2.end_date;
          _context3.prev = 2;
          _context3.next = 5;
          return regeneratorRuntime.awrap(Period.findByPk(id));

        case 5:
          period = _context3.sent;

          if (period) {
            _context3.next = 8;
            break;
          }

          return _context3.abrupt("return", res.status(404).json({
            message: 'Period not found'
          }));

        case 8:
          _context3.next = 10;
          return regeneratorRuntime.awrap(period.update({
            period_name: period_name,
            start_date: start_date,
            end_date: end_date
          }));

        case 10:
          return _context3.abrupt("return", res.status(200).json({
            message: 'Period updated successfully',
            period: period
          }));

        case 13:
          _context3.prev = 13;
          _context3.t0 = _context3["catch"](2);
          console.error("Error during period update:", _context3.t0.message);
          return _context3.abrupt("return", res.status(500).json({
            message: 'Error updating period.',
            error: _context3.t0.message
          }));

        case 17:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[2, 13]]);
};

exports.deletePeriod = function _callee4(req, res) {
  var id, period;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          _context4.prev = 1;
          _context4.next = 4;
          return regeneratorRuntime.awrap(Period.findByPk(id));

        case 4:
          period = _context4.sent;

          if (period) {
            _context4.next = 7;
            break;
          }

          return _context4.abrupt("return", res.status(404).json({
            message: 'Period not found'
          }));

        case 7:
          _context4.next = 9;
          return regeneratorRuntime.awrap(period.destroy());

        case 9:
          return _context4.abrupt("return", res.status(200).json({
            message: 'Period deleted successfully'
          }));

        case 12:
          _context4.prev = 12;
          _context4.t0 = _context4["catch"](1);
          console.error("Error during period deletion:", _context4.t0.message);
          return _context4.abrupt("return", res.status(500).json({
            message: 'Error deleting period.',
            error: _context4.t0.message
          }));

        case 16:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[1, 12]]);
};
//# sourceMappingURL=periodController.dev.js.map
