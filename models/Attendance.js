const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Attendance = db.define('Attendance', {
  attendance_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  group_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  period_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  selfie_image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  location: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  status: {
    type: DataTypes.ENUM('hadir', 'alpha', 'izin'),
    allowNull: false,
  },
}, {
  tableName: 'attendance',
  timestamps: true,
});

module.exports = Attendance;