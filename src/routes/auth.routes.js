import { Router } from "express";
const router = Router();

import * as authControllers from "../controllers/auth.controller";
import { authJwt, verifySignUp } from "../middlewares";

router.post(
  "/signup",
  [verifySignUp.checkRolesExisted, verifySignUp.checkDuplicateUsernameOrEmail],
  authControllers.signUp
);
router.post("/signin", authControllers.signIn);

export default router;
