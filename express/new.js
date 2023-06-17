const express = require('express');
const mysql = require('mysql');
const app = express();

// MySQL database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database_name'
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

// Middleware to parse JSON requests
app.use(express.json());

// Create a new user
app.post('/users', (req, res) => {
  const { keyid, created_at, updated_at, first_name, middle_name, last_name, country_code, country_number, mobile_number, email, address, area_id, photo } = req.body;

  const newUser = {
    keyid,
    created_at,
    updated_at,
    first_name,
    middle_name,
    last_name,
    country_code,
    country_number,
    mobile_number,
    email,
    address,
    area_id,
    photo
  };

  db.query('INSERT INTO user SET ?', newUser, (err, result) => {
    if (err) {
      console.error('Error creating user:', err);
      res.status(500).json({ message: 'Internal Server Error' });
    } else {
      res.status(200).json({ message: 'User created successfully' });
    }
  });
});

// Get all users
app.get('/users', (req, res) => {
  db.query('SELECT * FROM user', (err, results) => {
    if (err) {
      console.error('Error getting users:', err);
      res.status(500).json({ message: 'Internal Server Error' });
    } else {
      res.status(200).json(results);
    }
  });
});

// Get a user by ID
app.get('/users/:id', (req, res) => {
  const id = req.params.id;
  db.query('SELECT * FROM user WHERE keyid = ?', id, (err, results) => {
    if (err) {
      console.error('Error getting user:', err);
      res.status(500).json({ message: 'Internal Server Error' });
    } else if (results.length === 0) {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.status(200).json(results[0]);
    }
  });
});

// Update a user by ID
app.put('/users/:id', (req, res) => {
  const id = req.params.id;
  const updatedUser = req.body;
  db.query('UPDATE user SET ? WHERE keyid = ?', [updatedUser, id], (err, result) => {
    if (err) {
      console.error('Error updating user:', err);
      res.status(500).json({ message: 'Internal Server Error' });
    } else if (result.affectedRows === 0) {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.status(200).json({ message: 'User updated successfully' });
    }
  });
});

// Delete a user by ID
app.delete('/users/:id', (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM user WHERE keyid = ?', id, (err, result) => {
    if (err) {
      console.error('Error deleting user:', err);
      res.status(500).json({ message: 'Internal Server Error' });
    } else if (result.affectedRows === 0) {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.status(200).json({ message: 'User deleted successfully' });
    }
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});