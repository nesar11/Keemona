const express = require('express');
const router = express.Router();

const Company = require('../models/company');


// GET all Company
router.get('/', (req, res, next)=>{
    Company.find()
    .exec()
    .then(docs =>{
        res.status(200).json({docs})
    })
    .catch(err =>{
        res.status(500).json({
            error: err
        });
    });
});


// POST create 

router.post('/', (req, res, next)=>{
    const company = new Company({
        company_name: req.body.company_name,
        company_log: req.body.company_log,
        client_Kee_Code: req.body.client_Kee_Code,
        country: req.body.country,
        city: req.body.city,
        address: req.body.address,
        webiste: req.body.webiste,
        telephone: req.body.telephone,
        industry: req.body.industry,
        company_description:req.body.company_description,
        year_established:req.body.year_established

    });
    company.save()
    .then(docs =>{
        res.status(202).json({docs})
    })
    .catch(err =>{
        res.status(500).json({
            error: err
        });
    });

});


// GET all Company
router.get('/:companyId', (req, res, next)=>{
    const id = req.params.companyId;
    Company.findById(id)
    
    .then(doc =>{
        res.status(200).json({doc})
    })
    .catch(err =>{
        res.status(500).json({
            error: err
        });
    });
});




// PATCH all Company
router.patch('/:companyId', (req, res, next)=>{
    const id = req.params.companyId;
    Company.updateMany({_id:id},
         {$set:
            {
        company_name: req.body.company_name,
        company_log: req.body.company_log,
        client_Kee_Code: req.body.client_Kee_Code,
        country: req.body.country,
        city: req.body.city,
        address: req.body.address,
        webiste: req.body.webiste,
        telephone: req.body.telephone,
        industry: req.body.industry,
        company_description:req.body.company_description,
        year_established:req.body.year_established
            }
        })
    
    .then(doc =>{
        res.status(204).json({doc})
    })
    .catch(err =>{
        res.status(500).json({
            error: err
        });
    });
});



// Delete all Company
router.delete('/:companyId', (req, res, next)=>{
    const id = req.params.companyId;
    Company.deleteOne({_id: id})
    
    .then(doc =>{
        res.status(200).json({ message: 'company has been removed'})
    })
    .catch(err =>{
        res.status(500).json({
            error: err
        });
    });
});



module.exports = router;