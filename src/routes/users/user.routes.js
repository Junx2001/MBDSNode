const express = require('express');
const checkAuth = require('../middlewares/checkAuth.middleware');
const checkRole = require('../middlewares/checkRole.middleware');
const userControllers = require('./user.controllers');
const router = express.Router();

const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage }).single('file');

const UserRole = require('../../constants/UserRole');

router.post('/signup', upload,  userControllers.userRegister);
router.post('/login', userControllers.userLogin);
router.get('/profile', checkAuth, userControllers.getProfile);
router.post('/uploadProfile', [checkAuth,upload] , userControllers.uploadProfileImage);


module.exports = router;