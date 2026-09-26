import { Router } from "express";
import { handleWebhook } from "../controller/webhook.controller.js";

const router = Router();


router.post("/payment/webhook", handleWebhook);

export default router