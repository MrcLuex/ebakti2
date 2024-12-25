'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return regeneratorRuntime.async(function up$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(queryInterface.createTable('user', {
              user_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
              },
              role: {
                type: Sequelize.ENUM('admin', 'peserta'),
                allowNull: false
              },
              password: {
                type: Sequelize.STRING,
                allowNull: false
              },
              email: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true
              },
              name: {
                type: Sequelize.STRING,
                allowNull: false
              },
              gender: {
                type: Sequelize.ENUM('Laki-laki', 'Perempuan'),
                allowNull: false
              },
              date_of_birth: {
                type: Sequelize.DATE,
                allowNull: true
              },
              student_id: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true
              },
              department: {
                type: Sequelize.STRING,
                allowNull: true
              },
              address: {
                type: Sequelize.TEXT,
                allowNull: true
              },
              created_at: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
              },
              updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
              }
            }));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    });
  },
  down: function down(queryInterface, Sequelize) {
    return regeneratorRuntime.async(function down$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap(queryInterface.dropTable('user'));

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    });
  }
};
//# sourceMappingURL=user-migra.dev.js.map
