const express = require ("express");
// const { default: mongoose } = require("mongoose");
const app = express();
const cookieParser = require('cookie-parser');
// const app = express();

// Middleware
app.use(cookieParser());

const dotenv = require('dotenv');
app.use(express.json());

dotenv.config({path: './config.env'});
require('./db/connec');

app.use(require('./router/auth'));
const port = process.env.PORT;
const User =require('./model/userschema');



// app.get('/about',(req,res)=>{
//     res.send("This is about page");
// });


app.get('/contact',(req,res)=>{
    res.send("This is contact page");
});


app.get('/signin',(req,res)=>{
    res.send("this is sign in page");
});

app.get('/signup',(req,res)=>{
    res.send("This is signup page");
});

app.listen(port,()=>{
    console.log("listening on port ",port);
})