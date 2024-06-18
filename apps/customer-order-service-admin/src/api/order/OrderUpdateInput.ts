import { ContactPersonWhereUniqueInput } from "../contactPerson/ContactPersonWhereUniqueInput";
import { OrderItemUpdateManyWithoutOrdersInput } from "./OrderItemUpdateManyWithoutOrdersInput";
import { ShippingUpdateManyWithoutOrdersInput } from "./ShippingUpdateManyWithoutOrdersInput";

export type OrderUpdateInput = {
  contactPerson?: ContactPersonWhereUniqueInput | null;
  deliveryDate?: Date | null;
  note?: string | null;
  orderDate?: Date | null;
  orderItems?: OrderItemUpdateManyWithoutOrdersInput;
  shippings?: ShippingUpdateManyWithoutOrdersInput;
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
  totalAmount?: number | null;
};
