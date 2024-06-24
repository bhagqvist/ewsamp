import { Address } from "../address/Address";
import { ContactPerson } from "../contactPerson/ContactPerson";

export type Customer = {
  addresses?: Array<Address>;
  companyName: string;
  companyOrganizationNumber: string;
  contactPeople?: Array<ContactPerson>;
  createdAt: Date;
  homepage: string | null;
  id: string;
  updatedAt: Date;
};
