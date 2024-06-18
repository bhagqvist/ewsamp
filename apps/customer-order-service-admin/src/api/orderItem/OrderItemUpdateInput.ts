import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type OrderItemUpdateInput = {
  deliveryDate?: Date | null;
  order?: OrderWhereUniqueInput | null;
  position?: number | null;
  price?: number | null;
  product?: number | null;
  quantity?: number;
};
