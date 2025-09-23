"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class CreateProductService {
    async execute({ creator, name, price, quantity, category }) {
        const user = await prisma_1.default.user.findFirst({
            where: { name: creator },
        });
        if (!user) {
            throw new Error("Usuário não encontrado");
        }
        if (user.role !== "ADMIN") {
            throw new Error("Apenas administradores podem criar produtos");
        }
        if (!category) {
            throw new Error("Categoria não informada");
        }
        const categoryRecord = await prisma_1.default.category.findUnique({
            where: { name: category }
        });
        if (!categoryRecord) {
            throw new Error("Categoria não encontrada");
        }
        const product = await prisma_1.default.product.create({
            data: {
                createdBy: { connect: { id: user.id } },
                name,
                price,
                quantity,
                category: { connect: { id: categoryRecord.id } }
            }, select: {
                createdBy: { select: { name: true, role: true } },
                name: true,
                price: true,
                quantity: true,
                category: { select: { name: true } }
            }
        });
        return product;
    }
}
exports.CreateProductService = CreateProductService;
//# sourceMappingURL=CreateProductService.js.map