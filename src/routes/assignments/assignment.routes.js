const express = require('express');
const checkAuth = require('../middlewares/checkAuth.middleware');
const checkRole = require('../middlewares/checkRole.middleware');
const assignmentControllers = require('./assignment.controllers');
const router = express.Router();
const UserRole = require('../../constants/UserRole');

router.get('',checkAuth, assignmentControllers.getAssignments);
router.get('/nopagination',checkAuth, assignmentControllers.getAssignmentsUnpaginated);
router.post('',checkAuth, assignmentControllers.postAssignment);
router.put('/:id', [checkAuth, checkRole(["ROLE_USER_PROFESSOR"])], assignmentControllers.updateAssignment);

router.get('/:id', checkAuth, assignmentControllers.getAssignment);
router.delete('/:id', [checkAuth, checkRole(["ROLE_USER_PROFESSOR"])], assignmentControllers.deleteAssignment);

module.exports = router;
