import { Request, Response } from "express";
import { DetailOrderService } from "../../services/order/DetailOrderService";

class DetailOrderController {
  async handle(req: Request, res: Response) {
    const orderId = req.query.orderId as string;
    const detailOrderService = new DetailOrderService();
    const detailOrders = await detailOrderService.execute({ orderId });
    return res.json(detailOrders);
  }
}

export { DetailOrderController };
