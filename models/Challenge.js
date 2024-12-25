const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Challenge = db.define('Challenge', {
  challenge_id: {
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
  challenge_image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  tableName: 'challenge',
  timestamps: true,
});

module.exports = Challenge;