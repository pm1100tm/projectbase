import { Express, Request, Response } from 'express';

import OrderDtoType from '../types/OrderDtoType';
import OrderResponseDtoType from '../types/OrderResponseDtoType';

function OrderController(app: Express) {
  app.post('/orders', (req: Request<OrderDtoType>, res: Response) => {
    const order: OrderDtoType = req.body;
    const orderId = Date.now().toString();
    const response: OrderResponseDtoType = {
      id: orderId,
      menu: order.menu,
      totalPrice: order.totalPrice
    };

    res.status(201).send(response);
  });
}

export default OrderController;
