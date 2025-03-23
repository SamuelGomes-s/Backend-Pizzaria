import prismaClient from "../../prisma";

interface ItemRequest {
  itemId: string;
}
class RemoveItemService {
  async execute({ itemId }: ItemRequest) {
    const removeItem = await prismaClient.item.delete({
      where: {
        id: itemId,
      },
    });

    return removeItem;
  }
}

export { RemoveItemService };
