import crypto from "node:crypto";
import paymentModel from "../models/payment.model.js";



export async function handleWebhook(req, res) {
  const expected = crypto
    .createHmac("sha256", process.env.RAZORPAY_WEBHOOK_SECRET)
    .update(req.body) // raw Buffer, not parsed JSON
    .digest("hex");

  if (expected !== req.headers["x-razorpay-signature"]) return res.status(400).end();

  const event = JSON.parse(req.body);
  if (event.event === "payment.captured") {
    const p = event.payload.payment.entity;
    await paymentModel.findOneAndUpdate(
      { orderId: p.order_id, status: "pending" },
      { paymentId: p.id, status: "completed" }
    );
  }

  res.status(200).json({ received: true }); // 2xx, or Razorpay retries
}

