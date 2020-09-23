const express = require('express');
const router = express.Router();
const companyControllers = require('../controllers/companyController');
const multer = require('multer');
const fs = require('fs');

const extractfile = require('../middleware/file');

// GET all Company
router.get('/',   companyControllers.allowIfLoggedin, companyControllers.grantAccess('readAny', 'companies'),  companyControllers.getAll );

router.post('/', extractfile, companyControllers.allowIfLoggedin, companyControllers.grantAccess('createAny', 'companies'), companyControllers.AddCompany);
// GET all Company
router.get('/:companyId', companyControllers.getCompanyId);
// PATCH all Company
router.put('/:companyId',extractfile, companyControllers.allowIfLoggedin, companyControllers.grantAccess('cupdateAny', 'companies'), companyControllers.UpdateCompany );

// Delete all Company
router.delete('/:companyId', companyControllers.allowIfLoggedin, companyControllers.grantAccess('deleteAny', 'companies'), companyControllers.deleteCompany );



module.exports = router;