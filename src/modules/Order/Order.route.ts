
import express from 'express';
import { OrderControllers } from './Order.controller';
const router = express.Router();
router.post('/', OrderControllers.createOrder);

export const OrderRouters = router;