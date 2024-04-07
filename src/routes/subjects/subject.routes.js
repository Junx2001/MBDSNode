const express = require('express');
const checkAuth = require('../middlewares/checkAuth.middleware');
const checkRole = require('../middlewares/checkRole.middleware');
const subjectControllers = require('./subject.controllers');
const router = express.Router();
const UserRole = require('../../constants/UserRole');

router.get('',checkAuth, subjectControllers.getSubjects);
router.post('',[checkAuth, checkRole(["ROLE_USER_PROFESSOR"])], subjectControllers.postSubject);
router.put('', [checkAuth, checkRole(["ROLE_USER_PROFESSOR"])], subjectControllers.updateSubject);

router.get('/:id', checkAuth, subjectControllers.getSubject);
router.delete('/:id', [checkAuth, checkRole(["ROLE_USER_PROFESSOR"])], subjectControllers.deleteSubject);

module.exports = router;
