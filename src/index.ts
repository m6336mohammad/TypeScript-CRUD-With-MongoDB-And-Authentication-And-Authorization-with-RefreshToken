import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import userController from "./users/userController";
//variable
const port = process.env.PORT || 3000;
const app = express();

//middlerwers
app.use(express.json());

//controller
app.use('/users',userController)

//database connection
mongoose
  .connect("mongodb://127.0.0.1:27017/usearInfo")
  .then(() => {
    console.log("connect to database");
    app.listen(port, () => {
      console.log(`Server run on port ${port}`);
    });
  })
  .catch((e: string) => console.log("could not connect to database" + e));
