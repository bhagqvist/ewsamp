import { SortOrder } from "../../util/SortOrder";

export type ContactPersonOrderByInput = {
  createdAt?: SortOrder;
  customerId?: SortOrder;
  department?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  phone?: SortOrder;
  updatedAt?: SortOrder;
};
