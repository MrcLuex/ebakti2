const { Sequelize } = require('sequelize');

// Koneksi database
const db = new Sequelize('ebakti', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false, // Nonaktifkan log query di console
});

module.exports = db;
