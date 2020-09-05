const express = require('express');

const router = express.Router();
const Service = require('../models/service');
const service = require('../models/service');



router.get('/', (req, res, next) =>{
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
});



router.post('/', (req, res, next) =>{
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
});



router.get('/:serviceId', (req, res, next) =>{
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
});




router.patch('/:serviceId', (req, res, next) =>{
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
}); 

router.delete('/:serviceId', (req, res, next) =>{
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
});




module.exports = router;