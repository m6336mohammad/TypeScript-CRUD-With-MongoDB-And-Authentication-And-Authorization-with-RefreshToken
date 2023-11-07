import mongoose from "mongoose";
mongoose.connect('mongodb://127.0.0.1:27017/usearInfo')
.then(()=>console.log("connect to database"))
.catch((e)=>console.log("could not connect to database"+e))

