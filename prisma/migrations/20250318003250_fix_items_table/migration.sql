-- RenameForeignKey
ALTER TABLE "Items" RENAME CONSTRAINT "items_orderId_fkey" TO "Items_orderId_fkey";

-- RenameForeignKey
ALTER TABLE "Items" RENAME CONSTRAINT "items_productId_fkey" TO "Items_productId_fkey";
