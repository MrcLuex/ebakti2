const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Certificate = db.define('Certificate', {
  certificate_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  issued_date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  certificate_url: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  tableName: 'certificate',
  timestamps: true,
});

module.exports = Certificate;