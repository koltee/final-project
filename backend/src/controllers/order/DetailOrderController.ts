import {Request, Response} from 'express'
import { DetailOrderSerivce } from '../../services/order/DetailOrderSerivce'



class DetailOrderController{
  async handle(req: Request, res: Response){
    const order_id = req.query.order_id as string;

    const detailOrderService = new DetailOrderSerivce();

    const orders = await detailOrderService.execute({
      order_id
    })

    return res.json(orders);

  }
}

export { DetailOrderController }