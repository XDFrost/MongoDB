import { Router } from "express";
import { Adminlogin, Adminregister } from "../controllers/AdminController.js";

const adminRouter = Router();

adminRouter.post("/register", Adminregister)
adminRouter.post("/login", Adminlogin)

export default adminRouter;