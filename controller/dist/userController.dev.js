"use strict";

var jwt = require('jsonwebtoken');

var bcrypt = require('bcrypt');

var User = require('../models/User');

exports.register = function _callee(req, res) {
  var _req$body, email, password, name, gender, date_of_birth, student_id, department, address, hashedPassword, newUser;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, email = _req$body.email, password = _req$body.password, name = _req$body.name, gender = _req$body.gender, date_of_birth = _req$body.date_of_birth, student_id = _req$body.student_id, department = _req$body.department, address = _req$body.address;
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(bcrypt.hash(password, 10));

        case 4:
          hashedPassword = _context.sent;
          _context.next = 7;
          return regeneratorRuntime.awrap(User.create({
            role: 'peserta',
            // Default role untuk registrasi
            email: email,
            password: hashedPassword,
            name: name,
            gender: gender,
            date_of_birth: date_of_birth,
            student_id: student_id,
            department: department,
            address: address
          }));

        case 7:
          newUser = _context.sent;
          // Kirim respons sukses
          res.status(201).json({
            message: 'Registration successful',
            user: {
              id: newUser.user_id,
              email: newUser.email,
              name: newUser.name,
              gender: newUser.gender,
              date_of_birth: newUser.date_of_birth,
              student_id: newUser.student_id,
              department: newUser.department,
              address: newUser.address
            }
          });
          _context.next = 15;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](1);
          console.error("Error during registration:", _context.t0.message);
          res.status(500).json({
            error: _context.t0.message
          });

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 11]]);
};

exports.login = function _callee2(req, res) {
  var _req$body2, email, password, user, isMatch, token;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          console.log("Request Body:", req.body); // Debugging log

          _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password;

          if (!(!email || !password)) {
            _context2.next = 4;
            break;
          }

          return _context2.abrupt("return", res.status(400).json({
            error: 'Email and password are required'
          }));

        case 4:
          _context2.prev = 4;
          _context2.next = 7;
          return regeneratorRuntime.awrap(User.findOne({
            where: {
              email: email
            }
          }));

        case 7:
          user = _context2.sent;

          if (user) {
            _context2.next = 10;
            break;
          }

          return _context2.abrupt("return", res.status(404).json({
            error: 'Email tidak ditemukan'
          }));

        case 10:
          _context2.next = 12;
          return regeneratorRuntime.awrap(bcrypt.compare(password, user.password));

        case 12:
          isMatch = _context2.sent;

          if (isMatch) {
            _context2.next = 15;
            break;
          }

          return _context2.abrupt("return", res.status(401).json({
            error: 'Password salah'
          }));

        case 15:
          token = jwt.sign({
            id: user.user_id,
            role: user.role
          }, process.env.JWT_SECRET, // Pastikan JWT_SECRET diambil dari .env
          {
            expiresIn: '24h'
          });
          res.json({
            message: 'Login successful',
            token: token,
            user: {
              id: user.user_id,
              email: user.email,
              name: user.name,
              gender: user.gender,
              date_of_birth: user.date_of_birth,
              student_id: user.student_id,
              department: user.department,
              address: user.address
            }
          });
          _context2.next = 23;
          break;

        case 19:
          _context2.prev = 19;
          _context2.t0 = _context2["catch"](4);
          console.error("Error during login:", _context2.t0.message);
          res.status(500).json({
            error: _context2.t0.message
          });

        case 23:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[4, 19]]);
};
//# sourceMappingURL=userController.dev.js.map
