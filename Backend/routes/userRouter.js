import { Router } from "express";
import { UserLogin, UserRegister } from "../controllers/UserController.js";

const userRouter = Router();

userRouter.post("/register", UserRegister);
userRouter.post("/login", UserLogin);

export default userRouter;
