import express from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import routes from "./routes/index.routes.js";
import { notFound } from "./middleware/notFound.middleware.js";
import { errorHandler } from "./middleware/error.middleware.js";
import { env } from "./config/env.js";
import cors from 'cors'
import crypto from "node:crypto";
import paymentModel from "./models/payment.model.js";

const app = express();

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || ["http://127.0.0.1:5500", "http://localhost:5500"].includes(origin)) {
      return callback(null, true);
    }
    callback(new Error("CORS origin not allowed"));
  },
  credentials: true,
}));

// Register BEFORE app.use(express.json()) — the signature is over the RAW body
app.post("/api/payment/webhook", express.raw({ type: "application/json" }), handleWebhook);
app.use(express.json());

async function handleWebhook(req, res) {
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



app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan(env.nodeEnv === "production" ? "combined" : "dev"));

app.use("/api/v1", routes);

app.use(notFound);
app.use(errorHandler);

export default app;