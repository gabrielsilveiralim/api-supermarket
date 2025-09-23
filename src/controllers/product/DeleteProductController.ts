import { Request, Response } from "express";
import prismaClient from "../../prisma";
import { DeleteProductService } from "../../services/product/DeleteProductService";

class DeleteProductController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const userId = (req as any).user_id;  // pega user_id 
    if (!userId) {
      return res.status(401).json({ error: "Usuário não autenticado" });
    }

    // busca o usuário
    const user = await prismaClient.user.findUnique({
      where: { id: userId },
      select: { role: true }
    });

    if (!user) {
      return res.status(401).json({ error: "Usuário não encontrado" });
    }

    if (user.role !== "ADMIN") {
      return res.status(403).json({ error: "Apenas administradores podem deletar produtos" });
    }

    const deleteProductService = new DeleteProductService();

    try {
      await deleteProductService.execute(id);
      return res.status(200).json({ message: "Produto deletado com sucesso" });
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export { DeleteProductController };
