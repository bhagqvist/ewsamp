import { AddressListRelationFilter } from "../address/AddressListRelationFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ContactPersonWhereInput = {
  addresses?: AddressListRelationFilter;
  customer?: CustomerWhereUniqueInput;
  department?: StringNullableFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  orders?: OrderListRelationFilter;
  phone?: IntNullableFilter;
};
