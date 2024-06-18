import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CONTACTPERSON_TITLE_FIELD } from "../contactPerson/ContactPersonTitle";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";

export const AddressList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Addresses"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
