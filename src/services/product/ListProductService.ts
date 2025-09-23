import prismaClient from "../../prisma";

class ListProductsService {
  async execute() {
    const product = await prismaClient.product.findMany({
      select: {
        id: true,
        name: true,
        price: true,
        quantity: true,
        category: { select: { name: true } },
        createdBy: { select: { name: true, role: true } }
      }
    });

    return product;
  }
}

export { ListProductsService };
