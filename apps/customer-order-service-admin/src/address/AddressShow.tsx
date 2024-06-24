import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import { CONTACTPERSON_TITLE_FIELD } from "../contactPerson/ContactPersonTitle";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";

export const AddressShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="address" source="address" />
        <TextField label="address2" source="address2" />
        <TextField label="city" source="city" />
        <ReferenceField
          label="ContactPeople"
          source="contactperson.id"
          reference="ContactPerson"
        >
          <TextField source={CONTACTPERSON_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="country" source="country" />
        <TextField label="countrycode" source="countrycode" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="Customer"
          source="customer.id"
          reference="Customer"
        >
          <TextField source={CUSTOMER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="type" source="typeField" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="zipCode" source="zipCode" />
      </SimpleShowLayout>
    </Show>
  );
};
