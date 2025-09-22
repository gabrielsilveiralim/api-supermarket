import { Request, Response } from "express";
import { CreateProductService } from "../../services/product/CreateProductService";

class CreateProductController{
    async handle(req: Request, res: Response){
        const { creator , name, price, quantity, category } = req.body;

        const createProductService = new CreateProductService();

        const product = await createProductService.execute({
            creator,
            name,
            price,
            quantity,
            category
        })

        return res.json(product)
    }
}

export { CreateProductController };