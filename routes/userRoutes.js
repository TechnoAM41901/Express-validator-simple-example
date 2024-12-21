const express = require('express');
const { check } = require('express-validator');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/', userController.getAllUsers);

router.post(
  '/',
  [
    check('name').not().isEmpty().withMessage('Name is required'),
    check('email').isEmail().withMessage('Enter a valid email'),
    check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
  ],
  userController.createUser
);

module.exports = router;
