import {Router} from 'express'
import authenticate from '../middleware/auth.middleware.js'
import {createProduct} from '../controllers/product.controller.js'
import multer from 'multer'
import { productValidationRoules } from '../validator/product.validator.js'


const router=Router()

const upload= multer({
    storage:multer.memoryStorage(),
    limits:{
        fileSize:3*1024*1024
    }
})


router.post('/',authenticate,upload.array('images',5),productValidationRoules,createProduct)



export default router