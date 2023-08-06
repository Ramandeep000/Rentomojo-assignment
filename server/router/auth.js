const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const jwt = require('jsonwebtoken');
require('../db/connec');
const User = require('../model/userschema');
const authenticate = require('../middleware/authenticate');
router.get('/' , (req , res)=>{
    res.send("Hello from router home page")
})
router.post('/register' , (req , res)=>{
   
    const {name , email , phone , work , password , cpassword} = req.body;

    if(!name || !email || !phone || !work || !cpassword || !password)
    return res.status(422).json({message:"please fill the field properly"})

    User.findOne({email:email})
    .then((userExist)=>{
        if(userExist)
        {
        return res.status(422).json({message:"User already exists"})

        }
        else if(password != cpassword){
            return res.status(422).json({message:"Password doesnot match"})
        }

        const user1 = new User({name , email , phone  , work , password , cpassword});

        user1.save().then(()=>{
            return res.status(201).json({message:"User successfully created"})
        })
        .catch((err)=>{
            res.status(500).json({message:"Failed to register" , err});
        })

    })
    .catch((err)=>{
        console.log("Error is occurred " , err);
    })
})




 router.post('/login',(req,res)=>{
    const {email,password} =req.body;
    // console.log(email,password);
    if(!email || !password){
        console.log(" hello 4")
        return res.status(422).json({message : "Please fill the field properly ..."});
    }
    User.findOne({email:email })
    .then((exists)=>{
        if(!exists){
            console.log("hello 3")
            return res.status(422).json({message:"User does not exist"});
        }

        exists.generateAuthToken()
        .then((token)=>{
            // console.log(token);
            res.cookie("jwtoken",token , {
                expires:new Date(Date.now()+25892000000),
                httpOnly:true
            });
        })
        .catch((err)=>{
            console.log("error",err);
        })
        bcrypt.compare(password , exists.password)
        .then((present)=>{
            if(!present){
             console.log("hello 1")
            return res.status(422).json({message:"Password is wrong"});
}
           console.log("hello 2")
            return res.status(200).json({message :" User Login sucess"})
        })
       .catch((err)=>{
        console.log("Error: ",err)
       })
    })
    .catch((err)=>{
        console.log("Error in Login"+err.message);
    })
 })


router.get('/about',authenticate,(req,res)=>{
    console.log("This is about page");
    res.send(req.rootUser);
});


router.get('/getdata',authenticate,(req,res)=>{
    res.send(req.rootUser);
})




router.get('/logout',(req,res)=>{
    console.log("This is logout page");
    res.clearCookie('jwtoken',{path:'/'});
    res.status(200).send("user logged out");
});
module.exports = router;