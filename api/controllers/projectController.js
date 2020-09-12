const express = require('express');
const router = express.Router();

const Project  = require('../models/project');


exports.getAllProject= (req, res, next) =>{
    Project.find()
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



exports.AddProject = (req, res, next) =>{

        const project = new Project({
            energy : req.body.energy,
            air : req.body.air,
            water : req.body.water,
            tour_360 : req.body.tour_360,
            footfall : req.body.footfall,
            certification : req.body.certification,
            procurement : req.body.procurement,
            waste : req.body.waste,
            health_N_safety: req.body.health_N_safety,
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
        tour_360 : req.body.tour_360,
        footfall : req.body.footfall,
        certification : req.body.certification,
        procurement : req.body.procurement,
        waste : req.body.waste,
        health_N_safety: req.body.health_N_safety,
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


