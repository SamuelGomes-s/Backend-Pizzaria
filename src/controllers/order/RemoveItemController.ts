import { Request, Response } from "express";
import { RemoveItemService } from "../../services/order/RemoveItemService";

class RemoveItemController {
  async handle(req: Request, res: Response) {
    const itemId = req.query.itemId as string;
    const removeService = new RemoveItemService()
    const removeItem = removeService.execute({itemId})
    return res.json(removeItem);
  }
}

export { RemoveItemController };
