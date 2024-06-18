import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CONTACTPERSON_TITLE_FIELD } from "../contactPerson/ContactPersonTitle";
import { CUSTOMER_TITLE_FIELD } from "./CustomerTitle";

export const CustomerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="companyName" source="companyName" />
        <TextField
          label="companyOrganizationNumber"
          source="companyOrganizationNumber"
        />
        <DateField source="createdAt" label="Created At" />
        <TextField label="homepage" source="homepage" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Address"
          target="customerId"
          label="Addresses"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="ContactPerson"
          target="customerId"
          label="ContactPeople"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Customer"
              source="customer.id"
              reference="Customer"
            >
              <TextField source={CUSTOMER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Department" source="department" />
            <TextField label="email" source="email" />
            <TextField label="firstName" source="firstName" />
            <TextField label="ID" source="id" />
            <TextField label="lastName" source="lastName" />
            <TextField label="phone" source="phone" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
