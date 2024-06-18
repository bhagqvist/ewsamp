/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { Shipping } from "../../shipping/base/Shipping";
import { registerEnumType } from "@nestjs/graphql";

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

registerEnumType(EnumOrderStatus, {
  name: "EnumOrderStatus",
});
