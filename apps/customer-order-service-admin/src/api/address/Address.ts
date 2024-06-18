import { ContactPerson } from "../contactPerson/ContactPerson";
import { Customer } from "../customer/Customer";

export type Address = {
  address: string;
  address2: string | null;
  city: string | null;
  contactPeople?: ContactPerson | null;
  country: string | null;
  countrycode: string | null;
  createdAt: Date;
  customer?: Customer | null;
  id: string;
  typeField?: "Postal" | "Visiting" | "Shipping" | "Billing" | null;
  updatedAt: Date;
  zipCode: string | null;
};
