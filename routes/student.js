import { Router } from "express";
import SModel from "../models/StudentModel.js";
import { verifyToken } from "../utils/verifyToken.js";
import { addUsingToken, addWithoutToken, getAll, login } from "../controllers/TestController.js";

const Testrouter = Router();

Testrouter.get("/", getAll);
Testrouter.post("/add", addUsingToken)
Testrouter.post("/add-specific", addWithoutToken)
Testrouter.post("/login", verifyToken, login)

export default Testrouter;