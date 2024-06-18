import { SortOrder } from "../../util/SortOrder";

export type CustomerOrderByInput = {
  companyName?: SortOrder;
  companyOrganizationNumber?: SortOrder;
  createdAt?: SortOrder;
  homepage?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
