
const express = require('express');
const Service = require('../models/service');
const {roles} = require('../middleware/roles');


exports.grantAccess = function(action, resource) {
    return async (req, res, next) => {
      try {
        const permission = roles.can(req.user.role)[action](resource);
        if (!permission.granted) {
          return res.status(401).json({
            error: "You don't have enough permission to perform this action"
          });
        }
        next()
      } catch (error) {
        next(error)
      }
    }
  }
  
  exports.allowIfLoggedin = async (req, res, next) => {
    try {
      const user = res.locals.loggedInUser;
      if (!user)
        return res.status(401).json({
          error: "You need to be logged in to access this route"
        });
      req.user = user;
      next();
    } catch (error) {
      next(error);
    }
  }



exports.getAllService = (req, res, next) => {
    Service.find()
    .exec()
    .then(docs =>{
        
    if (docs.length >= 0) {
      res.status(200).json(docs);
        } else {
            res.status(404).json({
                message: 'No entries found'
            });
        }
    
    })
    .catch(err =>{
        res.status(500).json({
            error: err
        })
    });
};



exports.AddService = (req, res, next) =>{
    const service = new Service({
        service_name : req.body.service_name,
        service_Kee_Code: req.body.service_Kee_Code,
        description: req.body.description,
        specifications: req.body.specifications,
        more_info: req.body.more_info
    })
    service.save()
    .then(doc =>{
        res.status(200).json({
            doc:doc
        });
    })
    .catch(err =>{
        res.status(500).json({
            error: err
        })
    });
};



exports.getOneService =  (req, res, next) =>{
    const id = req.params.serviceId;
    Service.findById(id)
    .then(doc =>{
        if(!service){
            res.status(404).json({
                message: " 404 not found"
            })
        }
        res.status(200).json({
            doc:doc
        });
    })
    .catch(err =>{
        res.status(500).json({
            error: err
        })
    });
};




exports.updateService = (req, res, next) =>{
    const id = req.params.serviceId;
    Service.updateMany({_id: id},{$set: {
        service_name : req.body.service_name,
        service_Kee_Code: req.body.service_Kee_Code,
        description: req.body.description,
        specifications: req.body.specifications,
        more_info: req.body.more_info
    }})
    .then(doc =>{
        res.status(204).json({
            doc:doc
        });
    })
    .catch(err =>{
        res.status(500).json({
            error: err
        })
    });
}; 

exports.deleteOne = (req, res, next) =>{
    const id = req.params.serviceId;
    Service.remove({_id: id})
    .then(doc =>{
        res.status(200).json({
            message: " Service has been removed"
        });
    })
    .catch(err =>{
        res.status(500).json({
            error: err
        })
    });
};




