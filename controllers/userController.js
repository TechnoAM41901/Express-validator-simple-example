const { validationResult } = require('express-validator');
const userModel = require('../models/user');

module.exports = {
  getAllUsers: (req, res) => {
    res.json(userModel.getAll());
  },
  createUser: (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;
    if (userModel.findByEmail(email)) {
      return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
    }

    const newUser = { id: Date.now(), name, email, password };
    userModel.create(newUser);
    res.status(201).json(newUser);
  }
};
