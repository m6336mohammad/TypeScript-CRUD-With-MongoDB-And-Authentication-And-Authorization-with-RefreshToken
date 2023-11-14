import mongoose from "mongoose";

const userSchema = new mongoose.Schema ({
  name: {type: String},
  email: {type: String, require:true},
  password: {type: String, require: true},
});
const User = mongoose.model('User',userSchema);

export async function insertUsers(name:string, email:string,password:string){
  const user = new User({
    name,
    email,
    password,
  });

}


