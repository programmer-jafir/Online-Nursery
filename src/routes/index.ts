import { Router } from "express";
import { ProductRouters } from "../modules/Product/Product.route";

const router =Router()

const moduleRouters = [
    {
        path: '/product',
        route: ProductRouters
    },
]

moduleRouters.forEach(route => router.use(route.path, route.route))

export default router;