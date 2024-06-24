import { Shipping } from "../shipping/Shipping";

export enum EnumOrderStatus {
  Recieved = "Recieved",
  Confirmed = "Confirmed",
  Engineering = "Engineering",
  Workshop = "Workshop",
  Shipping = "Shipping",
  Delayed = "Delayed",
  InvoiceIssued = "InvoiceIssued",
  AwaitingPayment = "AwaitingPayment",
  Completed = "Completed",
  Other = "Other",
}
