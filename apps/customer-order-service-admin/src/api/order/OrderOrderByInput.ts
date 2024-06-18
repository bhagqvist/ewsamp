import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  contactPersonId?: SortOrder;
  createdAt?: SortOrder;
  deliveryDate?: SortOrder;
  id?: SortOrder;
  note?: SortOrder;
  orderDate?: SortOrder;
  status?: SortOrder;
  totalAmount?: SortOrder;
  updatedAt?: SortOrder;
};
