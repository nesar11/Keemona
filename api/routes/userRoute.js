const express = require('express');
const router = express.Router();

const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const auth = require('./auth');



router.get('/', (req, res, next)=>{
  User.find()
  .then(result=>{
    res.status(200).json({
      result : result
    })
  })
})

router.post('/', (req, res, next)=>{
  
  let user = new User({

    Avatar_image :req.body.Avatar_image,
    First_Name:req.body.First_Name,
    Last_Name:req.body.Last_Name,
    Company_Name:req.body.Company_Name,
    Job_Title:req.body.Job_Title,
    Email:req.body.Email,
    Telephone:req.body.Telephone,
    Country:req.body.Country,
    City:req.body.City,
    Address: req.body.Address,
    Password:req.body.Password,
    Role:req.body.Role

  });
  user.save((error, signed) =>{
    if(error){
      res.status(500).json({
        err: error
      })
    } else {
      let payload = {subject: signed._id};
      let token = jwt.sign(payload, 'secretKey')
      res.status(202).json({token
       

      })
    }
  })
})

router.post('/login', (req, res, next)=>{
  let userData = req.body
  User.findOne({email: userData.email}, (error, user)=>
      {
        if (error) {
          console.log(error)
        } else {
          if (!user) {
            res.status(401).send('Invalid email')
          } else
            if (user.password !== userData.password) {
              res.status(401).send('Invalid password')

            } else {
              let payload = { subject: user._id }
              let token = jwt.sign(payload, 'secretKey')
              res.status(200).send({ token })
            }
          }
      })
  })


module.exports = router;