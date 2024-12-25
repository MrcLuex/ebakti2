const { DataTypes } = require('sequelize');
const db = require('../config/db');

const FinalEvaluation = db.define('FinalEvaluation', {
  evaluation_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'final_evaluation',
  timestamps: true,
});

module.exports = FinalEvaluation;