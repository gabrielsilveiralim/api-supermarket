import prismaClient from "../../prisma";

class DeleteProductService {
  async execute(id: string) {
    //produto existe
    const product = await prismaClient.product.findUnique({
      where: { id }
    });

    if (!product) {
      throw new Error("Produto não encontrado");
    }

    // deleta o produto
    await prismaClient.product.delete({
      where: { id }
    });

    return { message: "Produto deletado com sucesso" };
  }
}

export { DeleteProductService };
