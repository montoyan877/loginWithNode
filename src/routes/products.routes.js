import { Router } from "express";
const router = Router();

import * as productControllers from "../controllers/products.controller";
import { authJwt } from "../middlewares";

router.post(
  "/",
  [authJwt.verifyToken, authJwt.isAdmin],
  productControllers.createProduct
);
router.get(
  "/",
  [authJwt.verifyToken, authJwt.isModerator],
  productControllers.getProduct
);
router.get(
  "/:productId",
  [authJwt.verifyToken, authJwt.isModerator],
  productControllers.getProductById
);
router.put(
  "/:productId",
  [authJwt.verifyToken, authJwt.isModerator],
  productControllers.updateProductById
);
router.delete(
  "/:productId",
  [authJwt.verifyToken, authJwt.isModerator],
  productControllers.deleteProductById
);

export default router;
