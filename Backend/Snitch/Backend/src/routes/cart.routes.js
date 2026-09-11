import { Router } from "express"
import authenticate from "../middleware/auth.middleware.js";
import { addToCartValidator } from "../validator/cart.validator.js"
import { addProductToCart } from "../controllers/cart.controller.js"


const router = Router()

router.use(authenticate)

/**
 * @POST /api/cart/add/product/:productId
 */
router.post('/add/product/:productId', addToCartValidator, addProductToCart)

export default router;