// models/Mentor.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

class Mentor extends Model {}

Mentor.init({
    mentor_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'Mentor',
    tableName: 'mentor',
    timestamps: true,
});
