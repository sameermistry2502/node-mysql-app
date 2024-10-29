const express = require('express');
const { register, login, getUsers, updateUser, deleteUser } = require('../controllers/userController');
const auth = require('../middleware/auth');
const authorizeRoles = require('../middleware/authorize');

const router = express.Router();

// Public routes
router.post('/register', register);
router.post('/login', login);

// Protected routes
router.get('/users', auth, authorizeRoles(['admin']), getUsers);
router.put('/users/:id', auth, authorizeRoles(['admin', 'user']), updateUser);
router.delete('/users/:id', auth, authorizeRoles(['admin']), deleteUser);

module.exports = router;
