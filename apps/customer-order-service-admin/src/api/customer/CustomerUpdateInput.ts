import { AddressUpdateManyWithoutCustomersInput } from "./AddressUpdateManyWithoutCustomersInput";
import { ContactPersonUpdateManyWithoutCustomersInput } from "./ContactPersonUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  addresses?: AddressUpdateManyWithoutCustomersInput;
  companyName?: string;
  companyOrganizationNumber?: string;
  contactPeople?: ContactPersonUpdateManyWithoutCustomersInput;
  homepage?: string | null;
};
