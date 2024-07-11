"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductValidation = exports.updateProductValidation = exports.createProductValidation = void 0;
const zod_1 = require("zod");
exports.createProductValidation = zod_1.z.object({
    body: zod_1.z.object({
        _id: zod_1.z.string().optional(),
        image: zod_1.z.string().url(),
        title: zod_1.z.string().min(1),
        description: zod_1.z.string().min(1),
        price: zod_1.z.number().nonnegative(),
        quantity: zod_1.z.number().int().nonnegative(),
        rating: zod_1.z.number().min(0).max(5),
        category: zod_1.z.string().min(1),
    }),
});
exports.updateProductValidation = zod_1.z.object({
    body: zod_1.z.object({
        _id: zod_1.z.string().optional(),
        image: zod_1.z.string().url().optional(),
        title: zod_1.z.string().min(1).optional(),
        description: zod_1.z.string().min(1).optional(),
        price: zod_1.z.number().nonnegative().optional(),
        quantity: zod_1.z.number().int().nonnegative().optional(),
        rating: zod_1.z.number().min(0).max(5).optional(),
        category: zod_1.z.string().min(1).optional(),
    }),
});
exports.ProductValidation = {
    createProductValidation: exports.createProductValidation,
    updateProductValidation: exports.updateProductValidation,
};
