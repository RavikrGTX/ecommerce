import express from "express";
import {
  getAllProducts,
  getProductById,
  createProduct,
} from "../controllers/productController.js";
import { authenticate } from "../middleware/authMiddleware.js";
import { authorize } from "../middleware/authorize.js";

const router = express.Router();

router.get("/", authenticate,getAllProducts);
router.get("/:id", getProductById);
router.post("/", authenticate,authorize('admin'), createProduct);

export default router;
