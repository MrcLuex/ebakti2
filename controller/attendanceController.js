const Attendance = require('../models/Attendance');

// Create Attendance
exports.createAttendance = async (req, res) => {
  const { group_id, period_id, user_id, selfie_image, date, status } = req.body;

  try {
    const newAttendance = await Attendance.create({
      group_id,
      period_id,
      user_id,
      selfie_image,
      date,
      status,
    });

    res.status(201).json({
      message: 'Attendance created successfully',
      attendance: newAttendance,
    });
  } catch (error) {
    console.error("Error during attendance creation:", error.message);
    res.status(500).json({ error: error.message });
  }
};

// Get All Attendance Records
exports.getAttendance = async (req, res) => {
  try {
    const attendances = await Attendance.findAll();
    res.status(200).json(attendances);
  } catch (error) {
    console.error("Error fetching attendance records:", error.message);
    res.status(500).json({ error: error.message });
  }
};

// Update Attendance
exports.updateAttendance = async (req, res) => {
  const { id } = req.params;
  const { group_id, period_id, user_id, selfie_image, date, status } = req.body;

  try {
    const attendance = await Attendance.findByPk(id);
    if (!attendance) {
      return res.status(404).json({ error: 'Attendance not found' });
    }

    await attendance.update({
      group_id,
      period_id,
      user_id,
      selfie_image,
      date,
      status,
    });

    res.status(200).json({
      message: 'Attendance updated successfully',
      attendance,
    });
  } catch (error) {
    console.error("Error during attendance update:", error.message);
    res.status(500).json({ error: error.message });
  }
};

// Delete Attendance
exports.deleteAttendance = async (req, res) => {
  const { id } = req.params;

  try {
    const attendance = await Attendance.findByPk(id);
    if (!attendance) {
      return res.status(404).json({ error: 'Attendance not found' });
    }

    await attendance.destroy();
    res.status(200).json({ message: 'Attendance deleted successfully' });
  } catch (error) {
    console.error("Error during attendance deletion:", error.message);
    res.status(500).json({ error: error.message });
  }
};