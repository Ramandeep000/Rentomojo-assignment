// const jwt =require("jsonwebtoken")
// const User = require('../model/userschema');
// const cookieParser = require("cookie-parser");
// // const cookieparser = requie(cookieParser)

// const app = express();

// // Middleware
// app.use(cookieParser());
// const authenticate= async (req,res,next)=>{
//      try{
//         const token = req.cookies.jwtoken;
//         const verifytoken = jwt.verify(token,process.env.SECRET_KEY);
//         const rootUser = await User.findOne({_id: verifytoken._id,"tokens.token":token});
//         if(!rootUser) { throw new Error('User not found ')}
//         req.token = token;
//         req.rootUser=rootUser;
//         req.userID = rootUser._id;

//         next();
//      } catch(err){
//         res.status(401).send("Unauthorised token provided");
//         console.log(err);
//      }
// }
// module.exports=authenticate;



const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

// Middleware
app.use(cookieParser());

// Your code
const jwt = require('jsonwebtoken');
const User = require('../model/userschema');

const authenticate = async (req, res, next) => {
  try {
   //  const token = req.cookies.jwtoken;
    const token = req.cookies.jwtoken;
        const verifytoken = jwt.verify(token,process.env.SECRET_KEY);
        const rootUser = await User.findOne({_id: verifytoken._id,"tokens.token":token});
        if(!rootUser) { throw new Error('User not found ')}
        req.token = token;
        req.rootUser=rootUser;
        req.userID = rootUser._id;

        next();
    // Rest of your code...
  } catch (err) {
    res.status(401).send('Unauthorized token provided');
    console.log(err);
  }
};

module.exports = authenticate;
