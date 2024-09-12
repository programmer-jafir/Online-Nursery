"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderServices = exports.createOrder = void 0;
const Order_model_1 = __importDefault(require("./Order.model"));
const Product_model_1 = require("../Product/Product.model");
const createOrder = (user, products) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Order_model_1.default.create({ user, products });
    for (const orderedProduct of products) {
        const product = yield Product_model_1.Product.findById(orderedProduct._id);
        if (product) {
            if (product.quantity >= orderedProduct.quantity) {
                product.quantity -= orderedProduct.quantity;
                yield product.save();
            }
            else {
                throw new Error(`Not enough stock for product ${product.name}`);
            }
        }
    }
    const populatedOrder = yield Order_model_1.default.findById(result._id)
        .populate('products')
        .exec();
    return populatedOrder; //
});
exports.createOrder = createOrder;
exports.OrderServices = {
    createOrder: exports.createOrder,
};
