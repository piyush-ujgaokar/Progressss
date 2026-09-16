import { Router } from "express"
import authenticate from "../middleware/auth.middleware.js";
import { addToCartValidator } from "../validator/cart.validator.js"
import { addProductToCart, getCart, removeProductFromCart } from "../controllers/cart.controller.js"
import { removeFromCartValidator } from "../validator/cart.validator.js";


const router = Router()

router.use(authenticate)


router.post('/add/product/:productId', addToCartValidator, addProductToCart)
router.delete("/remove/product/:productId", removeFromCartValidator, removeProductFromCart)
router.get("/", getCart)

export default router;