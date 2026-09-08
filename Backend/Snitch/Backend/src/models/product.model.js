import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 100,
  },
  description: {
    type: String,
    required: true,
    minLength: 10,
    maxLength: 1000,
  },
  categories: [
    {
      type: String,
      required: true,
    },
  ],
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  images: [
    {
      type: String,
      required: true,
    },
  ],
  isPublished: {
    type: Boolean,
    required: true,
    default: false,
  },
  sizes: [
    {
      size: {
        type: String,
        enum: ["XS","M", "L", "Xl", "XXL"],
        required: true,
      },
      stock: {
        type: Number,
        required: true,
        min: 0,
      },
    },
  ],
  price: {
    amount: {
      type: Number,
      required: true,
      min: 0,
    },
    currency: {
      type: String,
      enum: ["USD", "EUR", "CAD", "INR"],
      required: true,
      default: "INR",
    },
  },
},{
    timestamps:true
});


const productModel=mongoose.model("products",productSchema)


export default productModel
