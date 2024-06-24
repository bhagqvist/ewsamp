import { AddressUpdateManyWithoutContactPeopleInput } from "./AddressUpdateManyWithoutContactPeopleInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { OrderUpdateManyWithoutContactPeopleInput } from "./OrderUpdateManyWithoutContactPeopleInput";

export type ContactPersonUpdateInput = {
  addresses?: AddressUpdateManyWithoutContactPeopleInput;
  customer?: CustomerWhereUniqueInput | null;
  department?: string | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  orders?: OrderUpdateManyWithoutContactPeopleInput;
  phone?: number | null;
};
