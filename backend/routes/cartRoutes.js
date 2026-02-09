import express from "express";
// import {
//   getMyCart,
//   addToCart,
//   updateCartItem,
//   removeCartItem,
// } from "../controllers/cartController.js";
import { getMyCart,addToCart,updateCartItem, removeCartItem } from "../controllers/cartControllers.js";

import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", authenticate, getMyCart);
router.post("/", authenticate, addToCart);
router.put("/", authenticate, updateCartItem);
router.delete("/:productId", authenticate, removeCartItem);

export default router;
