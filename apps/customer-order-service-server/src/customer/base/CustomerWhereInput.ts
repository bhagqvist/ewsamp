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
import { AddressListRelationFilter } from "../../address/base/AddressListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { StringFilter } from "../../util/StringFilter";
import { ContactPersonListRelationFilter } from "../../contactPerson/base/ContactPersonListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

@InputType()
class CustomerWhereInput {
  @ApiProperty({
    required: false,
    type: () => AddressListRelationFilter,
  })
  @ValidateNested()
  @Type(() => AddressListRelationFilter)
  @IsOptional()
  @Field(() => AddressListRelationFilter, {
    nullable: true,
  })
  addresses?: AddressListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  companyName?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  companyOrganizationNumber?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => ContactPersonListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ContactPersonListRelationFilter)
  @IsOptional()
  @Field(() => ContactPersonListRelationFilter, {
    nullable: true,
  })
  contactPeople?: ContactPersonListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  homepage?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;
}

export { CustomerWhereInput as CustomerWhereInput };
