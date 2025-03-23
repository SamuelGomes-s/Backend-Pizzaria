import prismaClient from "../../prisma";

interface OrderRequest {
  orderId: string;
}

class FinishOrderService {
  async execute({ orderId }: OrderRequest) {
    const finishOrder = await prismaClient.order.update({
      where: {
        id: orderId,
      },
      data: {
        status: true,
      },
    });
    return finishOrder;
  }
}

export { FinishOrderService };
