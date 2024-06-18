import { AddressListRelationFilter } from "../address/AddressListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ContactPersonListRelationFilter } from "../contactPerson/ContactPersonListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CustomerWhereInput = {
  addresses?: AddressListRelationFilter;
  companyName?: StringFilter;
  companyOrganizationNumber?: StringFilter;
  contactPeople?: ContactPersonListRelationFilter;
  homepage?: StringNullableFilter;
  id?: StringFilter;
};
