import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type OrderItemCreateInput = {
  deliveryDate?: Date | null;
  order?: OrderWhereUniqueInput | null;
  price?: number | null;
  product?: ProductWhereUniqueInput | null;
  quantity?: number | null;
};
