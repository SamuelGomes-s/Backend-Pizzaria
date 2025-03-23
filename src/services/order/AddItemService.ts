import prismaClient from "../../prisma";

interface ItemRequest {
  orderId: string;
  productId: string;
  amount: number;
}
class AddItemService {
  async execute({ amount, orderId, productId }: ItemRequest) {
    const addItem = prismaClient.item.create({
      data: {
        orderId: orderId,
        productId: productId,
        amount: amount,
      },
    });

    return addItem;
  }
}

export { AddItemService };
