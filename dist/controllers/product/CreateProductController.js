"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductController = void 0;
const CreateProductService_1 = require("../../services/product/CreateProductService");
class CreateProductController {
    async handle(req, res) {
        const { creator, name, price, quantity, category } = req.body;
        const createProductService = new CreateProductService_1.CreateProductService();
        const product = await createProductService.execute({
            creator,
            name,
            price,
            quantity,
            category
        });
        return res.json(product);
    }
}
exports.CreateProductController = CreateProductController;
//# sourceMappingURL=CreateProductController.js.map