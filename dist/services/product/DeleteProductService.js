"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteProductService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class DeleteProductService {
    async execute(id) {
        //produto existe
        const product = await prisma_1.default.product.findUnique({
            where: { id }
        });
        if (!product) {
            throw new Error("Produto não encontrado");
        }
        // deleta o produto
        await prisma_1.default.product.delete({
            where: { id }
        });
        return { message: "Produto deletado com sucesso" };
    }
}
exports.DeleteProductService = DeleteProductService;
//# sourceMappingURL=DeleteProductService.js.map