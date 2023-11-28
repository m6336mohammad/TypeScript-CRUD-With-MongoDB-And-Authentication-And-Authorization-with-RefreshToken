import { Router, Request, Response, NextFunction } from "express";
import {register} from "./authService";
import { LoginDTO,RegisterDTO } from "./auth_dto";
import  validateMiddlerwers  from "../middleware/validationMiddlerwers";

const router = Router()