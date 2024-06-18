import { ContactPersonWhereUniqueInput } from "../contactPerson/ContactPersonWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type AddressUpdateInput = {
  address?: string;
  address2?: string | null;
  city?: string | null;
  contactPeople?: ContactPersonWhereUniqueInput | null;
  country?: string | null;
  countrycode?: string | null;
  customer?: CustomerWhereUniqueInput | null;
  typeField?: "Postal" | "Visiting" | "Shipping" | "Billing" | null;
  zipCode?: string | null;
};
