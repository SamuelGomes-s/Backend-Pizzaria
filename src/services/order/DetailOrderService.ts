import prismaClient from "../../prisma";

interface OrderRequest {
  orderId: string;
}

class DetailOrderService {
  async execute({ orderId }: OrderRequest) {
    const orderDetail = await prismaClient.item.findMany({
      where: {
        orderId: orderId,
      },
      include: {
        product: true,
        order: true,
      },
    });
    return orderDetail;
  }
}

export { DetailOrderService };
