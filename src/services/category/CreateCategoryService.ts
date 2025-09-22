import prismaClient from "../../prisma";

interface CategoryRequest {
  name: string;
  creator: string; //ID do usuário logado
}

class CreateCategoryService {
  async execute({ name, creator }: CategoryRequest) {
    if (!name || !creator) {
      throw new Error("Nome ou criador inválido");
    }

    // Busca o usuário no banco
    const user = await prismaClient.user.findFirst({
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
    const category = await prismaClient.category.create({
      data: {
        name: name,
        creator: { connect: { id: user.id }}
      },
      select: {
        id: true,
        name: true,
        creator: {
            select: { id: true, name: true, role: true}
        }
      },
    });

    return category;
  }
}

export { CreateCategoryService };
