import { AddressCreateNestedManyWithoutContactPeopleInput } from "./AddressCreateNestedManyWithoutContactPeopleInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { OrderCreateNestedManyWithoutContactPeopleInput } from "./OrderCreateNestedManyWithoutContactPeopleInput";

export type ContactPersonCreateInput = {
  addresses?: AddressCreateNestedManyWithoutContactPeopleInput;
  customer?: CustomerWhereUniqueInput | null;
  department?: string | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  orders?: OrderCreateNestedManyWithoutContactPeopleInput;
  phone?: number | null;
};
