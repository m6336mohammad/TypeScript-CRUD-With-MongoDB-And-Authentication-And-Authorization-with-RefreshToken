import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import userController from "./users/userController";
import authController from "./auth/authController";
import erroHandellerMiddleware from "./middleware/ErrorHandelingMid";
import CompController from "./components/compController";
import logger from "./helper/logger";
import refreshRouter from "./utils/refreshToken";
import cors from "cors";
//variable
const port = process.env.PORT || 3000;
const app = express();

//middlerwers
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//controller
app.use("/refresh", refreshRouter);
app.use("/users", userController);
app.use("/Components", CompController);
app.use("/auth", authController);

//erroHandellerMiddleware
app.use(erroHandellerMiddleware);

//database connection
mongoose
  .connect("mongodb://127.0.0.1:27017/usearInfo")
  .then(() => {
    logger.info("connect to database");
    app.listen(port, () => {
      logger.info(`Server run on port ${port}`);
    });
  })
  .catch((e: string) => {
    console.error("could not connect to database" + e);
  });
