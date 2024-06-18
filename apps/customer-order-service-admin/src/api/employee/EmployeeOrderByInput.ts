import { SortOrder } from "../../util/SortOrder";

export type EmployeeOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  initials?: SortOrder;
  lastName?: SortOrder;
  role?: SortOrder;
  updatedAt?: SortOrder;
};
