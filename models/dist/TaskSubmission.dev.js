"use strict";

var _require = require('sequelize'),
    DataTypes = _require.DataTypes;

var db = require('../config/db');

var TaskSubmission = db.define('TaskSubmission', {
  submission_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  task_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  submission_date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  score: {
    type: DataTypes.DECIMAL(5, 2),
    allowNull: true
  },
  feedback: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  status: {
    type: DataTypes.ENUM('submitted', 'reviewed', 'pending'),
    allowNull: false
  }
}, {
  tableName: 'task_submission',
  timestamps: true
});
module.exports = TaskSubmission;
//# sourceMappingURL=TaskSubmission.dev.js.map
