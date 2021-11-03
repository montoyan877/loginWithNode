import { Router } from "express";
const router = Router();

import * as usersController from "../controllers/users.controller";
import { authJwt, verifySignUp } from "../middlewares";

router.post(
  "/",
  [
    authJwt.verifyToken,
    authJwt.isAdmin,
    verifySignUp.checkRolesExisted,
    verifySignUp.checkDuplicateUsernameOrEmail,
  ],
  usersController.createUser
);

export default router;
