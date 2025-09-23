import prismaClient from "../../prisma";

interface UpdateProductRequest {
  id: string;
  name?: string;
  price?: string;
  quantity?: number;
  category?: string; // nome da categoria
}

class UpdateProductService {
  async execute({ id, name, price, quantity, category }: UpdateProductRequest) {
    const existingProduct = await prismaClient.product.findUnique({
      where: { id }
    });

    if (!existingProduct) {
      throw new Error("Produto não encontrado");
    }

    let categoryData = undefined;

    if (category) {
      const categoryRecord = await prismaClient.category.findUnique({
        where: { name: category }
      });

      if (!categoryRecord) {
        throw new Error("Categoria não encontrada");
      }

      categoryData = { connect: { id: categoryRecord.id } };
    }

    const updatedProduct = await prismaClient.product.update({
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

export { UpdateProductService };
