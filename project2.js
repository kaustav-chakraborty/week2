const express = require('express');
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');
const port=3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Temporary storage for admin data
const admins = [];

app.post(
  '/admin/signup',
  [
    body('username').notEmpty().withMessage('Username is required'),
    body('email').isEmail().withMessage('Invalid email'),
    body('password')
      .isLength({ min: 6 })
      .withMessage('Password must be at least 6 characters'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password } = req.body;

    try {
      // Check if admin already exists
      const existingAdmin = admins.find((admin) => admin.email === email);
      if (existingAdmin) {
        return res.status(400).json({ message: 'Admin already exists' });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new admin
      const newAdmin = { username, email, password: hashedPassword };
      admins.push(newAdmin);

      res.status(201).json({ message: 'Admin created successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  }
);

function started(){
    console.log(`Example app listening on port ${port}`);
    }
    app.listen(port, started)
    