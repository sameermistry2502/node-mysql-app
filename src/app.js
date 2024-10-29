const express = require('express');
const sequelize = require('./config/db');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());

app.use('/api', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log(`Server running on port ${PORT} and connected to database`);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
