import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateInput,
  TextInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { ContactPersonTitle } from "../contactPerson/ContactPersonTitle";
import { OrderItemTitle } from "../orderItem/OrderItemTitle";
import { ShippingTitle } from "../shipping/ShippingTitle";

export const OrderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="contactPerson.id"
          reference="ContactPerson"
          label="ContactPerson"
        >
          <SelectInput optionText={ContactPersonTitle} />
        </ReferenceInput>
        <DateInput label="Delivery Date" source="deliveryDate" />
        <TextInput label="Note" multiline source="note" />
        <DateTimeInput label="orderDate" source="orderDate" />
        <ReferenceArrayInput
          source="orderItems"
          reference="OrderItem"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrderItemTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="shippings"
          reference="Shipping"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ShippingTitle} />
        </ReferenceArrayInput>
        <SelectInput
          source="status"
          label="status"
          choices={[
            { label: "Recieved", value: "Recieved" },
            { label: "Confirmed", value: "Confirmed" },
            { label: "Engineering", value: "Engineering" },
            { label: "Workshop", value: "Workshop" },
            { label: "Shipping", value: "Shipping" },
            { label: "Delayed", value: "Delayed" },
            { label: "Invoice issued", value: "InvoiceIssued" },
            { label: "Awaiting payment", value: "AwaitingPayment" },
            { label: "Completed", value: "Completed" },
            { label: "Other", value: "Other" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput label="totalAmount" source="totalAmount" />
      </SimpleForm>
    </Edit>
  );
};
