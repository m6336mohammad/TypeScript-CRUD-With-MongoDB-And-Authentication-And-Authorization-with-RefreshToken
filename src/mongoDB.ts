import mongoose from "mongoose";
const pool = mongoose.connect('mongodb://127.0.0.1:27017/usearInfo')
.then(()=>console.log("connect to database"))
.catch((e: string)=>console.log("could not connect to database"+e))

export default pool