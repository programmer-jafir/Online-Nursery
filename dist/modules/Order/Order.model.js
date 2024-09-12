"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Product_model_1 = require("../Product/Product.model");
const UserSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    postCode: { type: Number, required: true },
    district: { type: String, required: true },
});
const OrderSchema = new mongoose_1.Schema({
    user: {
        type: UserSchema,
        required: true
    },
    products: [{
            type: Product_model_1.ProductSchema,
            required: true
        }],
});
const OrderModel = (0, mongoose_1.model)('Order', OrderSchema);
exports.default = OrderModel;
