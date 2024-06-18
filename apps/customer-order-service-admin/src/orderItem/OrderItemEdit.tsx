import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { OrderTitle } from "../order/OrderTitle";

export const OrderItemEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="deliveryDate" source="deliveryDate" />
        <ReferenceInput source="order.id" reference="Order" label="Order">
          <SelectInput optionText={OrderTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Position" source="position" />
        <NumberInput label="price" source="price" />
        <NumberInput step={1} label="Product" source="product" />
        <NumberInput step={1} label="quantity" source="quantity" />
      </SimpleForm>
    </Edit>
  );
};
