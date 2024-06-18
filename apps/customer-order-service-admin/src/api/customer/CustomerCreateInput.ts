import { AddressCreateNestedManyWithoutCustomersInput } from "./AddressCreateNestedManyWithoutCustomersInput";
import { ContactPersonCreateNestedManyWithoutCustomersInput } from "./ContactPersonCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  addresses?: AddressCreateNestedManyWithoutCustomersInput;
  companyName: string;
  companyOrganizationNumber: string;
  contactPeople?: ContactPersonCreateNestedManyWithoutCustomersInput;
  homepage?: string | null;
};
