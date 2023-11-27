import UserModel from "../model/userModel";
import { LoginDTO, RegisterDTO } from "./auth_dto";
import bcrypt from "bcrypt";
import { encodeToken , decodeToken } from "../utils";
import _ from "lodash"
import ServerError from "../errors/serverError";