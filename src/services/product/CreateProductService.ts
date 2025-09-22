import prismaClient from "../../prisma";

interface ProductRequest {
  creator: string,
  name: string,
  price: string,
  quantity: number,
  category: string // nome da categoria
}

class CreateProductService {
  async execute({ creator, name, price, quantity, category }: ProductRequest) {

    const user = await prismaClient.user.findFirst({
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

    const categoryRecord = await prismaClient.category.findUnique({
      where: { name: category }
    });

    if (!categoryRecord) {
      throw new Error("Categoria não encontrada");
    }

    const product = await prismaClient.product.create({
      data: {        
        createdBy: { connect: { id: user.id } },
        name,
        price,
        quantity,
        category: { connect: { id: categoryRecord.id } }
      }, select :{
        createdBy: { select: { name: true, role: true} },
        name: true,
        price: true,
        quantity: true,
        category: { select: { name: true } }
      }
    });

    return product;
  }
}

export { CreateProductService };
