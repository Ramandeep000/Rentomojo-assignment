
const mongoose = require('mongoose');
const db = process.env.DATABASE;

mongoose.connect(db, {
    useNewUrlParser:true,
    useUnifiedTopology:true
}) 
.then(()=>{
    console.log("Connected to Mongo");
})
.catch((err)=>{
    console.log("Error in connecting mongo :" + err);
})