import { ContactPersonWhereUniqueInput } from "../contactPerson/ContactPersonWhereUniqueInput";
import { OrderItemCreateNestedManyWithoutOrdersInput } from "./OrderItemCreateNestedManyWithoutOrdersInput";
import { ShippingCreateNestedManyWithoutOrdersInput } from "./ShippingCreateNestedManyWithoutOrdersInput";

export type OrderCreateInput = {
  contactPerson?: ContactPersonWhereUniqueInput | null;
  deliveryDate?: Date | null;
  note?: string | null;
  orderDate?: Date | null;
  orderItems?: OrderItemCreateNestedManyWithoutOrdersInput;
  shippings?: ShippingCreateNestedManyWithoutOrdersInput;
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
