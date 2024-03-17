const express = require('express');
const checkAuth = require('../middlewares/checkAuth.middleware');
const checkRole = require('../middlewares/checkRole.middleware');
const assignmentControllers = require('./assignement.controllers');
const router = express.Router();
const UserRole = require('../../constants/UserRole');

router.get('s',checkAuth, assignmentControllers.getAssignments);
router.post('s',checkAuth, assignmentControllers.postAssignment);
router.put('s', checkAuth, assignmentControllers.updateAssignment);

router.get('/:id', checkAuth, assignmentControllers.getAssignment);
router.delete('/:id', checkAuth, assignmentControllers.deleteAssignment);

module.exports = router;
