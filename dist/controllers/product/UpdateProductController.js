"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProductController = void 0;
const UpdateProductService_1 = require("../../services/product/UpdateProductService");
class UpdateProductController {
    async handle(req, res) {
        const { id } = req.params;
        const { name, price, quantity, category } = req.body;
        const updateProductService = new UpdateProductService_1.UpdateProductService();
        const updatedProduct = await updateProductService.execute({
            id,
            name,
            price,
            quantity,
            category
        });
        return res.json({
            message: "Produto Atualizado",
            product: updatedProduct
        });
    }
}
exports.UpdateProductController = UpdateProductController;
//# sourceMappingURL=UpdateProductController.js.map