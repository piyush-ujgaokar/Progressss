import { Router } from "express";
import authenticate from "../middleware/auth.middleware.js";
import {
  createProduct,
  deleteImage,
  getProductsBySeller,
  togglePublishProduct,
  updateProduct,
} from "../controllers/product.controller.js";
import multer from "multer";
import {
  productValidationRoules,
  updateProductValidator,
} from "../validator/product.validator.js";

const router = Router();

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 3 * 1024 * 1024,
  },
});

router.post(
  "/",
  authenticate,
  upload.array("images", 5),
  (req, res, next) => {
    if (req.body.sizes) {
      req.body.sizes = JSON.parse(req.body.sizes);
    }
    if (req.body.categories) {
      req.body.categories = JSON.parse(req.body.categories);
    }
    if (req.body.price) {
      req.body.price = JSON.parse(req.body.price);
    }
    next();
  },
  productValidationRoules,
  createProduct,
);

router.patch(
  "/update/:id",
  authenticate,
  upload.array("images", 5),
  (req, res, next) => {
    console.log("req.body", req.body);
    console.log(req.body.sizes);

    if (req.body.sizes) {
      req.body.sizes = JSON.parse(req.body.sizes);
    }

    if (req.body.categories) {
      req.body.categories = JSON.parse(req.body.categories);
    }

    if (req.body.price) {
      req.body.price = JSON.parse(req.body.price);
    }

    next();
  },
  updateProductValidator,
  updateProduct,
);

router.delete("/image/:id/:imageId",
    authenticate,
    deleteImage
)

router.patch("/publish/:id",
    authenticate,
    togglePublishProduct
)

router.get("/seller",
    authenticate,
    getProductsBySeller
)


export default router;
