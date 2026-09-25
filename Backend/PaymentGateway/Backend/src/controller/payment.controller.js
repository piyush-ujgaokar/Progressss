import crypto from "node:crypto";
import razorpay from "../config/razorpay.js";
import productModel from "../models/product.model.js";
import paymentModel from "../models/payment.model.js";


// POST /create/order/:productId
async function createOrder(req, res) {
  // Price comes from OUR database — never from req.body
  const product = await productModel.findById(req.params.productId);
  if (!product) return res.status(404).json({ message: "Product not found" });

  const order = await razorpay.orders.create({
    amount: Math.round(product.price.amount * 100), // paise!
    currency: product.price.currency,
    receipt: `rcpt_${Date.now()}`,
    notes: { productId: String(product._id) },
  });

  await paymentModel.create({
    orderId: order.id,
    amount: order.amount,
    currency: order.currency,
    product: product._id,
    status: "pending",
  });

  res.status(201).json({
    orderId: order.id,
    amount: order.amount,
    currency: order.currency,
    keyId: process.env.RAZORPAY_KEY_ID,
  });
}


export async function verifyPayment(req, res) {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

  const expected = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    .update(`${razorpay_order_id}|${razorpay_payment_id}`)
    .digest("hex");

  if (expected !== razorpay_signature) {
    return res.status(400).json({ status: "failure", message: "Invalid signature" });
  }

  const payment = await paymentModel.findOneAndUpdate(
    { orderId: razorpay_order_id },
    { paymentId: razorpay_payment_id, signature: razorpay_signature, status: "completed" },
    { new: true }
  );
  if (!payment) return res.status(404).json({ status: "failure", message: "Order not found" });

  res.json({ status: "success", orderId: payment.orderId });
}

export { createOrder };