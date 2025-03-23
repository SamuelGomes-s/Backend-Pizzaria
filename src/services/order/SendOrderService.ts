import prismaClient from "../../prisma";

interface OrderRequest {
  orderId: string;
}

class SendOrderService {
  async execute({ orderId }: OrderRequest) {
    const sendOrder = prismaClient.order.update({
      where: {
        id: orderId,
      },
      data: {
        draft: false,
      },
    });
    return sendOrder;
  }
}

export { SendOrderService };
