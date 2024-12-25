"use strict";

// controllers/taskController.js
var Task = require('../models/Task');

exports.createTask = function _callee(req, res) {
  var _req$body, title, description, due_date, status, newTask;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, title = _req$body.title, description = _req$body.description, due_date = _req$body.due_date, status = _req$body.status;
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(Task.create({
            title: title,
            description: description,
            due_date: due_date,
            status: status
          }));

        case 4:
          newTask = _context.sent;
          return _context.abrupt("return", res.status(201).json({
            message: 'Task created successfully',
            task: newTask
          }));

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](1);
          console.error("Error during task creation:", _context.t0.message);
          return _context.abrupt("return", res.status(500).json({
            message: 'Terjadi kesalahan saat membuat tugas.',
            error: _context.t0
          }));

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 8]]);
};

exports.getTasks = function _callee2(req, res) {
  var tasks;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(Task.findAll());

        case 3:
          tasks = _context2.sent;
          return _context2.abrupt("return", res.status(200).json(tasks));

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          console.error("Error fetching tasks:", _context2.t0.message);
          return _context2.abrupt("return", res.status(500).json({
            message: 'Terjadi kesalahan saat mengambil tugas.',
            error: _context2.t0
          }));

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.updateTask = function _callee3(req, res) {
  var id, _req$body2, title, description, due_date, status, task;

  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          id = req.params.id;
          _req$body2 = req.body, title = _req$body2.title, description = _req$body2.description, due_date = _req$body2.due_date, status = _req$body2.status;
          _context3.prev = 2;
          _context3.next = 5;
          return regeneratorRuntime.awrap(Task.findByPk(id));

        case 5:
          task = _context3.sent;

          if (task) {
            _context3.next = 8;
            break;
          }

          return _context3.abrupt("return", res.status(404).json({
            message: 'Task not found'
          }));

        case 8:
          _context3.next = 10;
          return regeneratorRuntime.awrap(task.update({
            title: title,
            description: description,
            due_date: due_date,
            status: status
          }));

        case 10:
          return _context3.abrupt("return", res.status(200).json({
            message: 'Task updated successfully',
            task: task
          }));

        case 13:
          _context3.prev = 13;
          _context3.t0 = _context3["catch"](2);
          console.error("Error during task update:", _context3.t0.message);
          return _context3.abrupt("return", res.status(500).json({
            message: 'Terjadi kesalahan saat memperbarui tugas.',
            error: _context3.t0
          }));

        case 17:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[2, 13]]);
};

exports.deleteTask = function _callee4(req, res) {
  var id, task;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          _context4.prev = 1;
          _context4.next = 4;
          return regeneratorRuntime.awrap(Task.findByPk(id));

        case 4:
          task = _context4.sent;

          if (task) {
            _context4.next = 7;
            break;
          }

          return _context4.abrupt("return", res.status(404).json({
            message: 'Task not found'
          }));

        case 7:
          _context4.next = 9;
          return regeneratorRuntime.awrap(task.destroy());

        case 9:
          return _context4.abrupt("return", res.status(200).json({
            message: 'Task deleted successfully'
          }));

        case 12:
          _context4.prev = 12;
          _context4.t0 = _context4["catch"](1);
          console.error("Error during task deletion:", _context4.t0.message);
          return _context4.abrupt("return", res.status(500).json({
            message: 'Terjadi kesalahan saat menghapus tugas.',
            error: _context4.t0
          }));

        case 16:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[1, 12]]);
};
//# sourceMappingURL=taskController.dev.js.map
