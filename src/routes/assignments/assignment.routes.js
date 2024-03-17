const express = require('express');
const checkAuth = require('../middlewares/checkAuth.middleware');
const checkRole = require('../middlewares/checkRole.middleware');
const assignmentControllers = require('./assignement.controllers');
const router = express.Router();
const UserRole = require('../../constants/UserRole');

router.get('',checkAuth, assignmentControllers.getAssignments);
router.post('',checkAuth, assignmentControllers.postAssignment);
router.put('', checkAuth, assignmentControllers.updateAssignment);

router.get('/:id', checkAuth, assignmentControllers.getAssignment);
router.delete('/:id', checkAuth, assignmentControllers.deleteAssignment);

module.exports = router;
