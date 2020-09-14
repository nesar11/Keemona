const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


const { roles } = require('../middleware/file');
 
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

async function hashPassword (Password) {
    return await bcrypt.hash(Password, 10);
}

async function validatePassword(plainPassword, hashedPassword){
    return await bcrypt.compare(plainPassword, hashedPassword)
}


exports.signup = async (req, res, next){
    try {
        const {Avatar_image, First_Name, Last_Name,Company_Name, Job_Title
            ,Email,Telephone, Country, City, Address, Password,Role } =req.body;
        const hashedPassword = await hashPassword(Password);
        const newUser = new User({
            Avatar_image: req.file.path, 
            First_Name,
            Last_Name,
            Company_Name,
            Job_Title,
            Telephone,
            Country,
            City, 
            Address,
            Email, 
            Password: hashedPassword,
            role: role || "basic"
        })
        const accessToken = jwt.sign({userId: newUser._id, }, process.env.JWT_SECRET,{
            expiresIn: "1d"
        });
        newUser.accessToken =  accessToken;
        await newUser.save();
        res.json({data: newUser, accessToken})
    }
    catch (error){
        next(error)
    }
}

exports.login = async (req, res, next) => {
try {
    const { Email, Password } = req.body;
    const user = await User.findOne({ Email });
    if (!user) return next(new Error('Email does not exist'));
    const validPassword = await validatePassword(Password, user.Password);
    if (!validPassword) return next(new Error('Password is not correct'))
    const accessToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
     expiresIn: "1d"
    });
    await User.findByIdAndUpdate(user._id, { accessToken })
    res.status(200).json({
     data: { Email: user.Email, role: user.role },
     accessToken
    })
   } catch (error) {
    next(error);
   }
  }

  exports.getUsers = async (req, res, next) => {
      const users = await User.find();
      res.status(200).json({
          data: users
      })

  }