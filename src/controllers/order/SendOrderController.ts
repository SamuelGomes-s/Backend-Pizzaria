import { Request, Response } from "express";
import { SendOrderService } from "../../services/order/SendOrderService";

class SendOrderController {
  async handle(req: Request, res: Response) {
    const sendOrderService = new SendOrderService();
    const { orderId } = req.body;

    const sendOrder = await sendOrderService.execute({ orderId });

    return res.json(sendOrder);
  }
}

export{SendOrderController}