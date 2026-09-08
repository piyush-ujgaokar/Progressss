import {Router} from 'express'
import authController, { getMe } from '../controllers/auth.controller.js'
import authenticate from '../middleware/auth.middleware.js'
import { loginValidationRules, registerValidationRules } from '../validator/auth.validator.js'


const router=Router()


router.post('/register',registerValidationRules,authController.registerController)
router.post('/login',loginValidationRules,authController.loginController)
router.get("/me", authenticate, getMe)


export default router