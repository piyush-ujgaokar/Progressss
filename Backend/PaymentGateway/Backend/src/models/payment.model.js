import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    orderId: { 
        type: String, 
        required: true, 
        unique: true 
    },
    paymentId: { 
        type: String 
    },
    signature: { 
        type: String 
    },
    amount: { 
        type: Number, 
        required: true 
    }, // in paise
    currency: { 
        type: String, 
        default: "INR" 
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
      required: true,
    },
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "user", 
    },
    status: {
      type: String,
      enum: ["pending", "completed", "failed"],
      default: "pending",
    },
  },
  { timestamps: true },
);

const PaymentModel = mongoose.model("payment", paymentSchema);

export default PaymentModel;
