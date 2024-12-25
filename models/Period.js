// models/Period.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Ensure this path is correct

class Period extends Model {}

Period.init({
    period_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    period_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    start_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    end_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'Period',
    tableName: 'period',
    timestamps: true,
});

module.exports = Period;