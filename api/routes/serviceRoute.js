const {AccessControl } = require('accesscontrol');
const express = require('express');
const router = express.Router();

const serviceControllers = require('../controllers/serviceController');

router.get('/', serviceControllers.allowIfLoggedin, serviceControllers.grantAccess('readAny', 'services'),  serviceControllers.getAllService);

router.post('/',serviceControllers.allowIfLoggedin, serviceControllers.grantAccess('createAny', 'services'), serviceControllers.AddService);


router.get('/:serviceId',  serviceControllers.getOneService);

router.patch('/:serviceId', serviceControllers.allowIfLoggedin, serviceControllers.grantAccess('updateAny', 'services'), serviceControllers.updateService); 

router.delete('/:serviceId',serviceControllers.allowIfLoggedin, serviceControllers.grantAccess('deleteAny', 'services'),  serviceControllers.deleteOne);




module.exports = router;