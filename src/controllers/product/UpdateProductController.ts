import { Request, Response } from "express";
import { UpdateProductService } from "../../services/product/UpdateProductService";

class UpdateProductController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const { name, price, quantity, category } = req.body;

    const updateProductService = new UpdateProductService();

    const updatedProduct = await updateProductService.execute({
      id,
      name,
      price,
      quantity,
      category
    });

    return res.json({
        message: "Produto Atualizado",
        product: updatedProduct});
  }
}

export { UpdateProductController };
