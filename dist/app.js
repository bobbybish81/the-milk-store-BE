"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("./database"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app
    .route('/api/milkstore')
    .get((_req, res) => {
    return database_1.default ?
        res
            .setHeader('content-type', 'application/json')
            .status(200)
            .json(database_1.default) :
        res
            .status(404)
            .end();
});
app
    .route('/api/milkstore/:productId')
    .patch((_req, res) => {
    const product = database_1.default.results.find(product => product.id === _req.params.productId);
    if (!product) {
        return res
            .status(404)
            .end();
    }
    product.storage = _req.body.storage;
    return database_1.default ?
        res
            .setHeader('location', `/api/milkstore/${product.id}`)
            .setHeader('content-type', 'application/json')
            .status(200)
            .json(database_1.default) :
        res
            .status(404)
            .end();
});
exports.default = app;
//# sourceMappingURL=app.js.map