import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { AddressTitle } from "../address/AddressTitle";
import { ContactPersonTitle } from "../contactPerson/ContactPersonTitle";

export const CustomerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="addresses"
          reference="Address"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AddressTitle} />
        </ReferenceArrayInput>
        <TextInput label="companyName" source="companyName" />
        <TextInput
          label="companyOrganizationNumber"
          source="companyOrganizationNumber"
        />
        <ReferenceArrayInput
          source="contactPeople"
          reference="ContactPerson"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ContactPersonTitle} />
        </ReferenceArrayInput>
        <TextInput label="homepage" source="homepage" />
      </SimpleForm>
    </Create>
  );
};
