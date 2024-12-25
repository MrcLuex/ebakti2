const { DataTypes } = require('sequelize');
const db = require('../config/db');

const ChallengeSubmission = db.define('ChallengeSubmission', {
  submission_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  challenge_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  submission_date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  score: {
    type: DataTypes.DECIMAL(5, 2),
    allowNull: true,
  },
  submission_file: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  feedback: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  status: {
    type: DataTypes.ENUM('submitted', 'reviewed', 'pending'),
    allowNull: false,
  },
}, {
  tableName: 'challenge_submission',
  timestamps: true,
});

module.exports = ChallengeSubmission;