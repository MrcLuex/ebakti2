const { Sequelize } = require('sequelize');

// Koneksi database
const db = new Sequelize('ebakti', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

db.authenticate()
  .then(() => console.log('Database connected'))
  .catch(err => console.error('Database connection error:', err));

module.exports = db;
