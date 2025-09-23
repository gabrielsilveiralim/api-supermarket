"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCategoryService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class CreateCategoryService {
    async execute({ name, creator }) {
        if (!name || !creator) {
            throw new Error("Nome ou criador inválido");
        }
        // Busca o usuário no banco
        const user = await prisma_1.default.user.findFirst({
            where: {
                name: creator, //nome da pessoa que veio da requesicao
            },
        });
        if (!user) {
            throw new Error("Usuário não encontrado");
        }
        if (user.role !== "ADMIN") {
            throw new Error("Apenas administradores podem criar categorias");
        }
        // Cria a categoria
        const category = await prisma_1.default.category.create({
            data: {
                name: name,
                creator: { connect: { id: user.id } }
            },
            select: {
                id: true,
                name: true,
                creator: {
                    select: { id: true, name: true, role: true }
                }
            },
        });
        return category;
    }
}
exports.CreateCategoryService = CreateCategoryService;
//# sourceMappingURL=CreateCategoryService.js.map