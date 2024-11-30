const { DataTypes } = require('sequelize');
const sequelize = require('../db'); // Import the database instance

const Task = sequelize.define('Task', {
  title: { type: DataTypes.STRING },
  status: { type: DataTypes.STRING, defaultValue: 'pending' },
  userId: { type: DataTypes.INTEGER },
});

module.exports = Task;