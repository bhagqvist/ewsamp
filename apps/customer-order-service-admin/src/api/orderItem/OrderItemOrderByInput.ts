import { SortOrder } from "../../util/SortOrder";

export type OrderItemOrderByInput = {
  createdAt?: SortOrder;
  deliveryDate?: SortOrder;
  id?: SortOrder;
  orderId?: SortOrder;
  position?: SortOrder;
  price?: SortOrder;
  product?: SortOrder;
  quantity?: SortOrder;
  updatedAt?: SortOrder;
};
