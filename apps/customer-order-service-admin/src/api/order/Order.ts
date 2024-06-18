import { ContactPerson } from "../contactPerson/ContactPerson";
import { OrderItem } from "../orderItem/OrderItem";
import { Shipping } from "../shipping/Shipping";

export type Order = {
  contactPerson?: ContactPerson | null;
  createdAt: Date;
  deliveryDate: Date | null;
  id: string;
  note: string | null;
  orderDate: Date | null;
  orderItems?: Array<OrderItem>;
  shippings?: Array<Shipping>;
  status?:
    | "Recieved"
    | "Confirmed"
    | "Engineering"
    | "Workshop"
    | "Shipping"
    | "Delayed"
    | "InvoiceIssued"
    | "AwaitingPayment"
    | "Completed"
    | "Other"
    | null;
  totalAmount: number | null;
  updatedAt: Date;
};
