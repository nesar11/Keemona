const express = require('express');
const router = express.Router();
const extractfile = require('../middleware/file');
const Company = require('../models/company');
const multer = require('multer');
// const mongoose = require('mongoose');
// const fs = require('fs');
const app = express();
// const {roles} = require('../middleware/roles');
// exports.grantAccess = function(action, resource){
//     return async (req, res, next)=>{
//         try {
//             const permission = roles.can(req.user.role)[action](resource);
//             if(!permission.granted){
//                 return  res.status(401).json({
//                     erroor: " you don't have enough permission to perfrom this action"
//                 })
                
//             }
//             next()
//         } catch (error){
//             next(error)
//         }
//     }
// }

// exports.allowIfLoggedin = async (req, res, next) => {
//     try {
//       const user = res.locals.loggedInUser;
//       if (!user)
//         return res.status(401).json({
//           error: "You need to be logged in to access this route"
//         });
//       req.user = user;
//       next();
//     } catch (error) {
//       next(error);
//     }
//   }


// GET all Company
exports.getAll =  (req, res, next)=>{
    Company.find()
    .exec()
    .then(cdata =>{
        res.status(200).json({cdata})
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
        companyName: req.body.companyName,
        companyLogo: url + "/" + req.file.path,
        clientKeeCode: req.body.clientKeeCode,
        country: req.body.country,
        city: req.body.city,
        address: req.body.address,
        website: req.body.webiste,
        telephone: req.body.telephone,
        industry: req.body.industry,
        companyDestn:req.body.companyDestn,
        yearEst:req.body.yearEst

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
                companyName: req.body.companyName,
                companyLogo: url + "/" + req.file.path,
                clientKeeCode: req.body.clientKeeCode,
                country: req.body.country,
                city: req.body.city,
                address: req.body.address,
                website: req.body.webiste,
                telephone: req.body.telephone,
                industry: req.body.industry,
                companyDestn:req.body.companyDestn,
                yearEst:req.body.yearEst
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



