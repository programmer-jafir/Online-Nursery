"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const notFound_1 = __importDefault(require("./middlwares/notFound"));
const app = (0, express_1.default)();
//parsers
app.use(express_1.default.json());
app.use((0, cors_1.default)({ origin: 'http://localhost:5173', credentials: true })); //{origin: 'http://localhost:5173', credentials: true}
//application routes
app.use('/api/', routes_1.default);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
//Not FOUND
app.use(notFound_1.default);
exports.default = app;
