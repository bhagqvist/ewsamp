import { ContactPersonWhereUniqueInput } from "../contactPerson/ContactPersonWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { OrderItemListRelationFilter } from "../orderItem/OrderItemListRelationFilter";
import { ShippingListRelationFilter } from "../shipping/ShippingListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type OrderWhereInput = {
  contactPerson?: ContactPersonWhereUniqueInput;
  deliveryDate?: DateTimeNullableFilter;
  id?: StringFilter;
  note?: StringNullableFilter;
  orderDate?: DateTimeNullableFilter;
  orderItems?: OrderItemListRelationFilter;
  shippings?: ShippingListRelationFilter;
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
    | "Other";
  totalAmount?: FloatNullableFilter;
};
