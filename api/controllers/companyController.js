const express = require('express');
const router = express.Router();
const extractfile = require('../middleware/file');
const Company = require('../models/company');
const multer = require('multer');
// const mongoose = require('mongoose');
// const fs = require('fs');
const app = express();


// GET all Company
exports.getAll =  (req, res, next)=>{
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
};

// POST create 

exports.AddCompany=  (req, res, next)=>{
    const url = req.protocol + "://" + req.get("host");
    console.log(req.file);
    const company = new Company({
        company_name: req.body.company_name,
        company_logo: url + "/" + req.file.path,
        client_Kee_Code: req.body.client_Kee_Code,
        country: req.body.country,
        city: req.body.city,
        address: req.body.address,
        website: req.body.webiste,
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

};


// GET all Company
exports.getCompanyId= (req, res, next)=>{
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
};




// PATCH all Company
exports.UpdateCompany = (req, res, next)=>{
    const id = req.params.companyId;
    const url = req.protocol + "://" + req.get("host");
    Company.update({_id:id},
         {$set:
            {
                company_name: req.body.company_name,
                company_logo: url + "/" + req.file.path,
                client_Kee_Code: req.body.client_Kee_Code,
                country: req.body.country,
                city: req.body.city,
                address: req.body.address,
                website: req.body.webiste,
                telephone: req.body.telephone,
                industry: req.body.industry,
                company_description:req.body.company_description,
                year_established:req.body.year_established
            }
        })
    
    .then(doc =>{
        console.log(doc);
        res.status(204).json({doc});
    })
    .catch(err =>{
        res.status(500).json({
            error: err
        });
    });
};



// Delete all Company
exports.deleteCompany = (req, res, next)=>{
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
};



