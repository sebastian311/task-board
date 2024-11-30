const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './dev.db', // Save the SQLite database to a file
});

module.exports = sequelize;
