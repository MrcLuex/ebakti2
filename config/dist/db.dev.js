"use strict";

var _require = require('sequelize'),
    Sequelize = _require.Sequelize; // Koneksi database


var db = new Sequelize('ebakti', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false // Nonaktifkan log query di console

});
module.exports = db;
//# sourceMappingURL=db.dev.js.map
