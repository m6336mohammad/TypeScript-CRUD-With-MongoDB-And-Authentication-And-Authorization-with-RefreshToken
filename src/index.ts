import 'dotenv/config'
import express from "express";
import homeRouter from './routes/home-route';
import mongoose from "mongoose";
const port  = process.env.PORT || 3000;
const app = express()
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/usearInfo')
.then(()=>console.log("connect to database"))
.catch((e: string)=>console.log("could not connect to database"+e))

app.use(express.json())
app.use('/',homeRouter)







app.listen(port,()=>{
  console.log(`Server run on port ${port}`);
})
