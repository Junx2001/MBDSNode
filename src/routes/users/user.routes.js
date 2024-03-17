const express = require('express');
const checkAuth = require('../middlewares/checkAuth.middleware');
const checkRole = require('../middlewares/checkRole.middleware');
const userControllers = require('./user.controllers');
const router = express.Router();
const UserRole = require('../../constants/UserRole');

router.post('/signup', userControllers.userRegister);
router.post('/login', userControllers.userLogin);
router.get('/profile', checkAuth, userControllers.getProfile);

module.exports = router;