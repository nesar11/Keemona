const express = require('express');
const router = express.Router();
const Project  = require('../models/project');
// const {roles} = require('../middleware/roles');

// exports.grantAccess = function(action, resource) {
//     return async (req, res, next) => {
//       try {
//         const permission = roles.can(req.user.role)[action](resource);
//         if (!permission.granted) {
//           return res.status(401).json({
//             error: "You don't have enough permission to perform this action"
//           });
//         }
//         next()
//       } catch (error) {
//         next(error)
//       }
//     }
//   }
  
//   exports.allowIfLoggedin = async (req, res, next) => {
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


exports.getAllProject= (req, res, next) =>{
    Project.find()
    .then(docs =>{
        res.status(200).json({
            docs : docs
        });
    })
    .catch(err =>{
        res.status(500).json({
            error: err
        });
    });
};



exports.AddProject = (req, res, next) =>{

        const project = new Project({
            energy : req.body.energy,
            air : req.body.air,
            water : req.body.water,
            tour360 : req.body.tour360,
            footfall : req.body.footfall,
            certification : req.body.certification,
            procurement : req.body.procurement,
            waste : req.body.waste,
            healthNsafety: req.body.healthNsafety,
            controle: req.body.controle

        }); 
        project.save()
        .then(result =>{
            res.status(200).json({
                result : result
            });
        })
        .catch(err =>{
            res.status(500).json({
                error: err
            });
        });
};


exports.getOneProject= (req, res, next) =>{
    const id = req.params.projectId;
    Project.findById(id)
    .then(result =>{
        res.status(200).json({
            result : result
        });
    })
    .catch(err =>{
        res.status(500).json({
            error: err
        });
    });
};



exports.updateProject=(req, res, next) =>{
    const id = req.params.projectId;
    Project.updateMany({_id: id}, {$set:{

        energy : req.body.energy,
        air : req.body.air,
        water : req.body.water,
        tour360 : req.body.tour_360,
        footfall : req.body.footfall,
        certification : req.body.certification,
        procurement : req.body.procurement,
        waste : req.body.waste,
        healthNsafety: req.body.healthNsafety,
        controle: req.body.controle

    }})
    .then(result =>{
        res.status(204).json({
            result : result
        });
    })
    .catch(err =>{
        res.status(500).json({
            error: err
        });
    });
};





exports.deleteProject= (req, res, next) =>{
    const id = req.params.projectId;
    Project.remove({_id :id})
    .then(result =>{
        res.status(200).json({
            message: " Project has been removed"
        });
    })
    .catch(err =>{
        res.status(500).json({
            error: err
        });
    });
};


