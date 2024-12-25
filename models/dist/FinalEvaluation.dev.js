"use strict";

var _require = require('sequelize'),
    DataTypes = _require.DataTypes;

var db = require('../config/db');

var FinalEvaluation = db.define('FinalEvaluation', {
  evaluation_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'final_evaluation',
  timestamps: true
});
module.exports = FinalEvaluation;
//# sourceMappingURL=FinalEvaluation.dev.js.map
