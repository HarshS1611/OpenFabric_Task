import express from 'express';
import authenticateToken from '../Middleware/authMiddleware.js';
import { createProduct, deleteProduct, getProducts, updateProduct, getProductbyId } from '../Controllers/Product.js';


const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProductbyId);
router.post("/",authenticateToken, createProduct);
router.patch("/:id",authenticateToken, updateProduct);
router.delete("/:id",authenticateToken, deleteProduct);

export default router;
