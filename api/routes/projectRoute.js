const {AccessControl } = require('accesscontrol');
const express = require('express');
const router = express.Router();

// const Project  = require('../models/project');
const projectControllers = require('../controllers/projectController');

router.get('/', projectControllers.allowIfLoggedin, projectControllers.grantAccess('readAny', 'projects'),  projectControllers.getAllProject);



router.post('/', projectControllers.AddProject);


router.get('/:projectId', projectControllers.allowIfLoggedin, projectControllers.getOneProject );



router.patch('/:projectId', projectControllers.allowIfLoggedin, projectControllers.updateProject);





router.delete('/:projectId', projectControllers.allowIfLoggedin, projectControllers.deleteProject);


module.exports = router;