const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
require('dotenv').config();
// const cors = require();

const app = express();

// Connect DB
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/favorites', require('./routes/favorites'));

// Serve static assests in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(_dirname, 'clent', 'build', 'index.html'))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
