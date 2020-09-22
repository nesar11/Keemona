const express = require('express');
const app = express();
const path = require('path');
const jwt = require('jsonwebtoken');

const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const multer = require('multer');
const fs = require('fs');
const companyRoutes = require('./routes/companyRoute');
const projectRoutes = require('./routes/projectRoute');
const serviceRoutes = require('./routes/serviceRoute');
const User = require('./models/user');

const userRoutes = require('./routes/userRoute');


require("dotenv").config({
  path:path.join(__dirname, '../.env')
});

mongoose
 .connect('mongodb://localhost:27017/keemona',{
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true 
} )
 .then(() => {

  console.log('Database Connected ');
 });
 mongoose.Promise = global.Promise;



// app.use(express.static(__dirname + 'uploads'));
app.use('/uploads', express.static('api/uploads'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());


app.use(async (req, res, next) => {
  if (req.headers["x-access-token"]) {
    try {
      const accessToken = req.headers["x-access-token"];
      const { userId, exp } = await jwt.verify(accessToken, process.env.JWT_SECRET);
      // If token has expired
      if (exp < Date.now().valueOf() / 1000) {
        return res.status(401).json({
          error: "JWT token has expired, please login to obtain a new one"
        });
      }
      res.locals.loggedInUser = await User.findById(userId);
      next();
    } catch (error) {
      next(error);
    }
  } else {
    next();
  }
});

// add module
app.use('/api/companies', companyRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/auth/', userRoutes);


 app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});



 app.use((req, res, next) =>{
  const error = new Error('Not found');
  error.status(404);
  next(error);
})

app.use((error, req, res, next) =>{
  res.status(error.status || 500);
  res.json({
      error: {
          message: error.message
      }
  })
}) 



// add module
app.use('/api/companies', companyRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/auth/', userRoutes);
 

module.exports = app;