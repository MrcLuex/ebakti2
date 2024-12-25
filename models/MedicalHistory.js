// models/MedicalHistory.js
const { DataTypes } = require('sequelize');
const db = require('../config/db');

const MedicalHistory = db.define('MedicalHistory', {
    history_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    medical_condition: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    medication: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    allergies: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    tableName: 'medical_history',
    timestamps: true,
});

module.exports = MedicalHistory;