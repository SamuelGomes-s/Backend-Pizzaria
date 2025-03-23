import { Request, Response } from "express";
import { AddItemService } from "../../services/order/AddItemService";

class AddItemController {
  async handle(req: Request, res: Response) {
    const { orderId, amount, productId } = req.body;
    const addService = new AddItemService();
    const addItem = await addService.execute({ amount, orderId, productId });
    return res.json(addItem);
  }
}

export { AddItemController };
