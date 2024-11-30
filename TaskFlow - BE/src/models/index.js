const sequelize = require('../db'); // Import the Sequelize instance
const User = require('./User.model'); // Import models
const Task = require('./Task.model');

// Define relationships if needed
User.hasMany(Task, { foreignKey: 'userId' });
Task.belongsTo(User, { foreignKey: 'userId' });

// Sync models with the database
sequelize.sync({ alter: true }) // `alter: true` updates schema without losing data
  .then(() => console.log('Database synced'))
  .catch(err => console.error('Failed to sync database:', err));

module.exports = { sequelize, User, Task };
