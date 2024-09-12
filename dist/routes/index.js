"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Product_route_1 = require("../modules/Product/Product.route");
const Order_route_1 = require("../modules/Order/Order.route");
const router = (0, express_1.Router)();
const moduleRouters = [
    {
        path: '/product',
        route: Product_route_1.ProductRouters
    },
    {
        path: '/orders',
        route: Order_route_1.OrderRouters
    },
];
moduleRouters.forEach(route => router.use(route.path, route.route));
exports.default = router;
