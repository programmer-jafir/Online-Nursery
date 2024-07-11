import express from 'express';
import { ProductControllers } from './Product.controller';
import validateRequest from '../../middlwares/validateRequest';
import { ProductValidation } from './Product.validation';
const router = express.Router();

router.post("/",validateRequest(ProductValidation.createProductValidation),
 ProductControllers.createProduct);
router.get("/", ProductControllers.getAllProducts,);
router.get("/:id", ProductControllers.getSingleProduct);
router.put("/:id",validateRequest(ProductValidation.updateProductValidation),
 ProductControllers.updateProduct);
router.delete("/:id", ProductControllers.deleteProduct);


export const ProductRouters = router;