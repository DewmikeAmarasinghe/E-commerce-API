import express from 'express';
import { getUserOrders, getOrderById, getAllOrders, updateOrderStatus } from '../controllers/order.controller.js';
import { protectRoute, adminRoute } from '../middleware/auth.middleware.js';

const router = express.Router();

// User routes
router.get("/my-orders", protectRoute, getUserOrders);
router.get("/:id", protectRoute, getOrderById);

// Admin routes
router.get("/", protectRoute, adminRoute, getAllOrders);
router.patch("/:id/status", protectRoute, adminRoute, updateOrderStatus);

export default router;
