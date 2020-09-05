const express = require('express');
const app = express();

const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const companyRoutes = require('./routes/companyRoute');
const projectRoutes = require('./routes/projectRoute');
const serviceRoutes = require('./routes/serviceRoute');




app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// add module
app.use('/api/companies', companyRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/services', serviceRoutes);
 
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

 app.use((req, res, next) => {
  res.header('Access_Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
if(req.method ==='OPTIONS'){
  res.header('Access-Control-Methods', 'PUT, POST, PATCH, DELETE, GET');
  return res.status(200).json({});
}
next();
})

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

module.exports = app;