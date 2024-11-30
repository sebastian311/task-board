const app = require('./app');
const { sequelize } = require('./models');

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected!');
    console.log(`Server running on http://localhost:${PORT}`);
  } catch (err) {
    console.error('Unable to connect to the database:', err);
  }
});
