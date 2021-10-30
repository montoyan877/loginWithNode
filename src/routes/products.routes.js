import { Router } from "express";
const router = Router();

import * as productControllers from "../controllers/products.controller";
import { verifyToken } from "../middlewares";

router.post("/", verifyToken, productControllers.createProduct);
router.get("/", verifyToken, productControllers.getProduct);
router.get("/:productId", verifyToken, productControllers.getProductById);
router.put("/:productId", verifyToken, productControllers.updateProductById);
router.delete("/:productId", verifyToken, productControllers.deleteProductById);

export default router;
