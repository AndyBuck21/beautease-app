const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');

// Temporary in-memory storage (replace with DB later)
let users = [];

router.post('/register', (req, res) => {
  const { name, email, password, role } = req.body;
  if (users.find(u => u.email === email)) return res.status(400).json({ msg: 'User exists' });
  users.push({ name, email, password, role });
  res.json({ token: 'fake-jwt-token-123' });
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) return res.status(400).json({ msg: 'Invalid credentials' });
  res.json({ token: 'fake-jwt-token-123' });
});

module.exports = router;