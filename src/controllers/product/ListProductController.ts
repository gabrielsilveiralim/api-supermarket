import { Request, Response } from "express";
import { ListProductsService } from "../../services/product/ListProductService";

class ListProductsController {
  async handle(req: Request, res: Response) {
    const listProductsService = new ListProductsService();

    const product = await listProductsService.execute();

    return res.json(product);
  }
}

export { ListProductsController };
