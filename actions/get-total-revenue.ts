import prismadb from "@/lib/prismadb";
import { formatter } from "@/lib/utils";

export const getTotalRevenue = async (storeId: string) => {
  const paidOrders = await prismadb.order.findMany({
    where: {
      storeId,
      isPaid: true,
    },
    include: {
      orderItems: {
        include: {
          product: true,
        },
      },
    },
  });

  const totalRevenue = paidOrders.reduce((total, order) => {
    return (
      total +
      order.orderItems.reduce((totalItem, orderItem) => {
        return totalItem + Number(orderItem.product.price);
      }, 0)
    );
  }, 0);

  return totalRevenue;
};
