import express from 'express'
import productController from '../controllers/product.controller.js'

const router = express.Router()

router.get('/', productController.getAllController)

export default router