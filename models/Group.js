// models/Group.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

class Group extends Model {}

Group.init({
    group_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    group_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    mentor1_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Mentors',
            key: 'mentor_id',
        },
    },
    mentor2_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Mentors',
            key: 'mentor_id',
        },
    },
}, {
    sequelize,
    modelName: 'Group',
    tableName: 'group',
    timestamps: true,
});