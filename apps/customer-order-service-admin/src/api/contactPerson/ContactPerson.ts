import { Address } from "../address/Address";
import { Customer } from "../customer/Customer";
import { Order } from "../order/Order";

export type ContactPerson = {
  addresses?: Array<Address>;
  createdAt: Date;
  customer?: Customer | null;
  department: string | null;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  orders?: Array<Order>;
  phone: number | null;
  updatedAt: Date;
};
