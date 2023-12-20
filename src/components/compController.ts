import { Router, Request, Response, NextFunction } from "express";

import { createNewComponents, deleteComponents, getAllComponents, getOneComponents, updateComponents } from "./componentService";
import CreateComponentDTO from "./dto/componentCreateDTO";
import {RequestWithUser} from "../types/requestWithUser";
import UpdateComponentDTO from "./dto/componentsUpdateDTO";
import { authMiddleware, validateMiddlerwers } from "./../middleware";
import GetAllComponentDTO from "./dto/getAllComponentDTO";