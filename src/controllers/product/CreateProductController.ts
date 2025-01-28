import { Request, Response} from 'express'
import { CreateProductService } from '../../services/product/CreateProductService'

class CreateProductController {
    async handle(req: Request, res: Response) {
        const { name, price, description, category_id } = req.body;

        let banner = '';

        const createProductService = new CreateProductService();

        const product = await createProductService.execute({
            name,
            price,
            description,
            banner,
            category_id
        });

        res.json(product);
    }
}

export { CreateProductController }