const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Task = db.define('Task', {
  task_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  due_date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('pending', 'completed', 'overdue'),
    allowNull: false,
  },
}, {
  tableName: 'task',
  timestamps: true,
});

module.exports = Task;