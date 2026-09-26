import express from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import routes from "./routes/index.routes.js";
import webHookRouter from './routes/webhook.routes.js'
import { notFound } from "./middleware/notFound.middleware.js";
import { errorHandler } from "./middleware/error.middleware.js";
import { env } from "./config/env.js";
import cors from 'cors'

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
app.post("/api/payment/webhook", express.raw({ type: "application/json" }),webHookRouter);
app.use(express.json());

app.use("/api", express.raw({ type: "application/json" }),webHookRouter)



app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan(env.nodeEnv === "production" ? "combined" : "dev"));

app.use("/api/v1", routes);

app.use(notFound);
app.use(errorHandler);

export default app;