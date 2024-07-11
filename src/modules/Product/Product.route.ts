import express from 'express';
import { ProductControllers } from './Product.controller';
const router = express.Router();

router.post("/", ProductControllers.createProduct);
router.get("/", ProductControllers.getAllProducts,);
router.get("/:id", ProductControllers.getSingleProduct);
router.put("/:id", ProductControllers.updateProduct);
router.delete("/:id", ProductControllers.deleteProduct);


export const ProductRouters = router;