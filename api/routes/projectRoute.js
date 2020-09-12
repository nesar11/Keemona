const express = require('express');
const router = express.Router();

const Project  = require('../models/project');
const projectControllers = require('../controllers/projectController');

router.get('/', projectControllers.getAllProject);



router.post('/',projectControllers.AddProject);


router.get('/:projectId',projectControllers.getOneProject );



router.patch('/:projectId',projectControllers.updateProject);





router.delete('/:projectId',projectControllers.deleteProject);


module.exports = router;