const {AccessControl } = require('accesscontrol');
const express = require('express');
const router = express.Router();

// const Project  = require('../models/project');
const projectControllers = require('../controllers/projectController');

router.get('/',  projectControllers.getAllProject);
router.post('/',  projectControllers.AddProject);
router.get('/:projectId',  projectControllers.getOneProject );
router.patch('/:projectId',  projectControllers.updateProject);
router.delete('/:projectId',   projectControllers.deleteProject);


// router.get('/', projectControllers.allowIfLoggedin, projectControllers.grantAccess('readAny', 'projects'),  projectControllers.getAllProject);
// router.post('/', projectControllers.allowIfLoggedin, projectControllers.grantAccess('createAny', 'projects'),  projectControllers.AddProject);
// router.get('/:projectId', projectControllers.allowIfLoggedin,  projectControllers.getOneProject );
// router.patch('/:projectId', projectControllers.allowIfLoggedin, projectControllers.grantAccess('updateAny', 'projects'),  projectControllers.updateProject);
// router.delete('/:projectId', projectControllers.allowIfLoggedin, projectControllers.grantAccess('deleteAny', 'projects'),   projectControllers.deleteProject);


module.exports = router;