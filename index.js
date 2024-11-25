const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/e-commerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once('open', () => console.log('Connected to MongoDB'));

// Routes
const itemsRoute = require('./routes/items');
const authRoute = require('./routes/auth');
app.use('/api/auth', authRoute);
app.use('/api/items', itemsRoute);

// Start server
app.listen(3000, () => console.log('Server running on port 3000'));
