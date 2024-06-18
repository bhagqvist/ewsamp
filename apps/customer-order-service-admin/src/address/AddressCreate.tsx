import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ContactPersonTitle } from "../contactPerson/ContactPersonTitle";
import { CustomerTitle } from "../customer/CustomerTitle";

export const AddressCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="address" source="address" />
        <TextInput label="address2" source="address2" />
        <TextInput label="city" source="city" />
        <ReferenceInput
          source="contactPeople.id"
          reference="ContactPerson"
          label="ContactPeople"
        >
          <SelectInput optionText={ContactPersonTitle} />
        </ReferenceInput>
        <TextInput label="country" source="country" />
        <TextInput label="countrycode" source="countrycode" />
        <ReferenceInput
          source="customer.id"
          reference="Customer"
          label="Customer"
        >
          <SelectInput optionText={CustomerTitle} />
        </ReferenceInput>
        <SelectInput
          source="typeField"
          label="type"
          choices={[
            { label: "Postal", value: "Postal" },
            { label: "Visiting", value: "Visiting" },
            { label: "Shipping", value: "Shipping" },
            { label: "Billing", value: "Billing" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="zipCode" source="zipCode" />
      </SimpleForm>
    </Create>
  );
};
