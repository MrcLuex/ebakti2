const Certificate = require('../models/Certificate');
const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

// Generate a certificate for a user
exports.generateCertificate = async (req, res) => {
  const { user_id } = req.body;

  try {
    // Check if the user has a certificate already
    const existingCertificate = await Certificate.findOne({ where: { user_id } });
    if (existingCertificate) {
      return res.status(400).json({ message: 'Certificate already exists for this user.' });
    }

    // Create a new PDF document
    const doc = new PDFDocument();
    const certificatePath = path.join(__dirname, '../certificates', `${user_id}.pdf`);

    // Pipe the PDF into a file
    doc.pipe(fs.createWriteStream(certificatePath));

    // Add content to the PDF
    doc.fontSize(25).text('Certificate of Achievement', { align: 'center' });
    doc.moveDown();
    doc.fontSize(16).text(`This certifies that`, { align: 'center' });
    doc.moveDown();
    doc.fontSize(20).text(`User  ID: ${user_id}`, { align: 'center' });
    doc.moveDown();
    doc.fontSize(16).text('has successfully completed the course.', { align: 'center' });
    doc.moveDown();
    doc.text(`Issued on: ${new Date().toLocaleDateString()}`, { align: 'center' });

    // Finalize the PDF and end the stream
    doc.end();

    // Create a new certificate record in the database
    const newCertificate = await Certificate.create({
      user_id,
      issued_date: new Date(),
      certificate_url: `https://example.com/certificates/${user_id}.pdf`, // Update this URL to point to the actual location
    });

    res.status(201).json({
      message: 'Certificate generated successfully',
      certificate: newCertificate,
    });
  } catch (error) {
    console.error("Error during certificate generation:", error.message);
    res.status(500).json({ error: error.message });
  }
};