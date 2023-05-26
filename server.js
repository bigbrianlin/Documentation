const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Conncet Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) =>
  res.json({ msg: 'Welcome to the Documentation API.' })
);

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/documents', require('./routes/documents'));
app.use('/api/shared', require('./routes/shared'));
app.use('/api/department', require('./routes/department'));
app.use('/api/history', require('./routes/history'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
