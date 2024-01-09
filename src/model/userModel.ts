import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
name:String,
mobile:String,
password:String,
email:String,
age:Number,
resetCode: String,
resetTokenExpiration: Number,
flage:Boolean,
})

export default mongoose.model('UserModel',userSchema)
 
