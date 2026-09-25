import express from "express";
import { createOrder, verifyPayment } from "../controllers/payment.controller.js";
import { authUser } from "../middlewares/auth.middleware.js";

router.post("/create/order/:productId", authUser, createOrder);
router.post("/api/payment/verify", authUser, verifyPayment);

const router = express.Router();

module.exports = router;