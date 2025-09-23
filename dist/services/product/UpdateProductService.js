"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProductService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class UpdateProductService {
    async execute({ id, name, price, quantity, category }) {
        const existingProduct = await prisma_1.default.product.findUnique({
            where: { id }
        });
        if (!existingProduct) {
            throw new Error("Produto não encontrado");
        }
        let categoryData = undefined;
        if (category) {
            const categoryRecord = await prisma_1.default.category.findUnique({
                where: { name: category }
            });
            if (!categoryRecord) {
                throw new Error("Categoria não encontrada");
            }
            categoryData = { connect: { id: categoryRecord.id } };
        }
        const updatedProduct = await prisma_1.default.product.update({
            where: { id },
            data: {
                name,
                price,
                quantity,
                ...(categoryData ? { category: categoryData } : {})
            },
            select: {
                id: true,
                name: true,
                price: true,
                quantity: true,
                category: { select: { name: true } },
                createdBy: { select: { name: true, role: true } }
            }
        });
        return updatedProduct;
    }
}
exports.UpdateProductService = UpdateProductService;
//# sourceMappingURL=UpdateProductService.js.map