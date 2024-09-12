import { Router } from "express";
import { ProductRouters } from "../modules/Product/Product.route";
import { OrderRouters } from "../modules/Order/Order.route";


const router =Router()

const moduleRouters = [
    {
        path: '/product',
        route: ProductRouters
    },
    {
        path: '/orders',
        route: OrderRouters
    },
]

moduleRouters.forEach(route => router.use(route.path, route.route))

export default router;