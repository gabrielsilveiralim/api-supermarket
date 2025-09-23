"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteProductController = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const DeleteProductService_1 = require("../../services/product/DeleteProductService");
class DeleteProductController {
    async handle(req, res) {
        const { id } = req.params;
        const userId = req.user_id; // pega user_id 
        if (!userId) {
            return res.status(401).json({ error: "Usuário não autenticado" });
        }
        // busca o usuário
        const user = await prisma_1.default.user.findUnique({
            where: { id: userId },
            select: { role: true }
        });
        if (!user) {
            return res.status(401).json({ error: "Usuário não encontrado" });
        }
        if (user.role !== "ADMIN") {
            return res.status(403).json({ error: "Apenas administradores podem deletar produtos" });
        }
        const deleteProductService = new DeleteProductService_1.DeleteProductService();
        try {
            await deleteProductService.execute(id);
            return res.status(200).json({ message: "Produto deletado com sucesso" });
        }
        catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
}
exports.DeleteProductController = DeleteProductController;
//# sourceMappingURL=DeleteProductController.js.map