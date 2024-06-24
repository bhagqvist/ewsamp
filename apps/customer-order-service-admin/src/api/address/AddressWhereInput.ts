import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ContactPersonWhereUniqueInput } from "../contactPerson/ContactPersonWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type AddressWhereInput = {
  address?: StringFilter;
  address2?: StringNullableFilter;
  city?: StringNullableFilter;
  contactPeople?: ContactPersonWhereUniqueInput;
  country?: StringNullableFilter;
  countrycode?: StringNullableFilter;
  customer?: CustomerWhereUniqueInput;
  id?: StringFilter;
  typeField?: "Postal" | "Visiting" | "Shipping" | "Billing";
  zipCode?: StringNullableFilter;
};
