import { Request, Response } from "express";
import { RemoveOrderService } from "../../services/order/RemoveOrderService";

class RemoveOrderController {
  async handle(req: Request, res: Response) {
    const orderId = req.query.orderId as string;
    const removeOrderService = new RemoveOrderService();
    const deleteOrder = await removeOrderService.execute({ orderId });

    return res.json(deleteOrder);
  }
}

export { RemoveOrderController };
