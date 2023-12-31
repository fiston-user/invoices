import express from "express";
import loginUser from "../controllers/auth/loginController.js";
import newAccessToken from "../controllers/auth/refreshTokenController.js";
import registerUser from "../controllers/auth/registerController.js";
import verifyUserEmail from "../controllers/auth/verifyEmailController.js";
import { loginLimiter } from "../middleware/apiLimiter.js";

const router = express.Router();

router.post("/register", registerUser);

router.get("/verify/:emailToken/:userId", verifyUserEmail);

router.post("/login", loginLimiter, loginUser);

router.get("/new_access_token", newAccessToken);

export default router;
