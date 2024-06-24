/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AddressCreateNestedManyWithoutCustomersInput } from "./AddressCreateNestedManyWithoutCustomersInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { ContactPersonCreateNestedManyWithoutCustomersInput } from "./ContactPersonCreateNestedManyWithoutCustomersInput";

@InputType()
class CustomerCreateInput {
  @ApiProperty({
    required: false,
    type: () => AddressCreateNestedManyWithoutCustomersInput,
  })
  @ValidateNested()
  @Type(() => AddressCreateNestedManyWithoutCustomersInput)
  @IsOptional()
  @Field(() => AddressCreateNestedManyWithoutCustomersInput, {
    nullable: true,
  })
  addresses?: AddressCreateNestedManyWithoutCustomersInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @Field(() => String)
  companyName!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @Field(() => String)
  companyOrganizationNumber!: string;

  @ApiProperty({
    required: false,
    type: () => ContactPersonCreateNestedManyWithoutCustomersInput,
  })
  @ValidateNested()
  @Type(() => ContactPersonCreateNestedManyWithoutCustomersInput)
  @IsOptional()
  @Field(() => ContactPersonCreateNestedManyWithoutCustomersInput, {
    nullable: true,
  })
  contactPeople?: ContactPersonCreateNestedManyWithoutCustomersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  homepage?: string | null;
}

export { CustomerCreateInput as CustomerCreateInput };
