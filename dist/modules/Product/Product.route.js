"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRouters = void 0;
const express_1 = __importDefault(require("express"));
const Product_controller_1 = require("./Product.controller");
const router = express_1.default.Router();
router.post("/", Product_controller_1.ProductControllers.createProduct);
router.get("/", Product_controller_1.ProductControllers.getAllProducts);
router.get("/:id", Product_controller_1.ProductControllers.getSingleProduct);
router.put("/:id", Product_controller_1.ProductControllers.updateProduct);
router.delete("/:id", Product_controller_1.ProductControllers.deleteProduct);
exports.ProductRouters = router;
