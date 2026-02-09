import express from "express";
import {
  checkout,
  getMyOrders,
  getOrderById,
} from "../controllers/orderControllers.js";
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/checkout", authenticate, checkout);
router.get("/", authenticate, getMyOrders);
router.get("/:id", authenticate, getOrderById);

export default router;
