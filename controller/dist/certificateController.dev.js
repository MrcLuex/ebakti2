"use strict";

var Certificate = require('../models/Certificate');

var PDFDocument = require('pdfkit');

var fs = require('fs');

var path = require('path'); // Generate a certificate for a user


exports.generateCertificate = function _callee(req, res) {
  var user_id, existingCertificate, doc, certificatePath, newCertificate;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          user_id = req.body.user_id;
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(Certificate.findOne({
            where: {
              user_id: user_id
            }
          }));

        case 4:
          existingCertificate = _context.sent;

          if (!existingCertificate) {
            _context.next = 7;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            message: 'Certificate already exists for this user.'
          }));

        case 7:
          // Create a new PDF document
          doc = new PDFDocument();
          certificatePath = path.join(__dirname, '../certificates', "".concat(user_id, ".pdf")); // Pipe the PDF into a file

          doc.pipe(fs.createWriteStream(certificatePath)); // Add content to the PDF

          doc.fontSize(25).text('Certificate of Achievement', {
            align: 'center'
          });
          doc.moveDown();
          doc.fontSize(16).text("This certifies that", {
            align: 'center'
          });
          doc.moveDown();
          doc.fontSize(20).text("User  ID: ".concat(user_id), {
            align: 'center'
          });
          doc.moveDown();
          doc.fontSize(16).text('has successfully completed the course.', {
            align: 'center'
          });
          doc.moveDown();
          doc.text("Issued on: ".concat(new Date().toLocaleDateString()), {
            align: 'center'
          }); // Finalize the PDF and end the stream

          doc.end(); // Create a new certificate record in the database

          _context.next = 22;
          return regeneratorRuntime.awrap(Certificate.create({
            user_id: user_id,
            issued_date: new Date(),
            certificate_url: "https://example.com/certificates/".concat(user_id, ".pdf") // Update this URL to point to the actual location

          }));

        case 22:
          newCertificate = _context.sent;
          res.status(201).json({
            message: 'Certificate generated successfully',
            certificate: newCertificate
          });
          _context.next = 30;
          break;

        case 26:
          _context.prev = 26;
          _context.t0 = _context["catch"](1);
          console.error("Error during certificate generation:", _context.t0.message);
          res.status(500).json({
            error: _context.t0.message
          });

        case 30:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 26]]);
};
//# sourceMappingURL=certificateController.dev.js.map
