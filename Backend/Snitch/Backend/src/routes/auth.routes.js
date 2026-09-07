import {Router} from 'express'
import authController, { getMe } from '../controllers/auth.controller.js'
import authenticate from '../middleware/auth.middleware.js'


const router=Router()


router.post('/register',authController.registerController)
router.post('/login',authController.loginController)
router.get("/me", authenticate, getMe)


export default router