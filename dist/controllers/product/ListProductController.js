"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListProductsController = void 0;
const ListProductService_1 = require("../../services/product/ListProductService");
class ListProductsController {
    async handle(req, res) {
        const listProductsService = new ListProductService_1.ListProductsService();
        const product = await listProductsService.execute();
        return res.json(product);
    }
}
exports.ListProductsController = ListProductsController;
//# sourceMappingURL=ListProductController.js.map