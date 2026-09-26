import { Router } from "express";
import { createOrder, verifyPayment } from "../controller/payment.controller.js";

const router = Router();

router.post("/create/order/:productId", createOrder);
router.post("/verify", verifyPayment);


export default router;