const { DataTypes } = require('sequelize');
const sequelize = require('../db'); // Import the database instance

const User = sequelize.define('User', {
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
});

module.exports = User;