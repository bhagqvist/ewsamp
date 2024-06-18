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
import { ContactPersonWhereUniqueInput } from "../../contactPerson/base/ContactPersonWhereUniqueInput";
import { ValidateNested, IsOptional, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { OrderItemListRelationFilter } from "../../orderItem/base/OrderItemListRelationFilter";
import { ShippingListRelationFilter } from "../../shipping/base/ShippingListRelationFilter";
import { EnumOrderStatus } from "./EnumOrderStatus";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

@InputType()
class OrderWhereInput {
  @ApiProperty({
    required: false,
    type: () => ContactPersonWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ContactPersonWhereUniqueInput)
  @IsOptional()
  @Field(() => ContactPersonWhereUniqueInput, {
    nullable: true,
  })
  contactPerson?: ContactPersonWhereUniqueInput;

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

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  orderDate?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: () => OrderItemListRelationFilter,
  })
  @ValidateNested()
  @Type(() => OrderItemListRelationFilter)
  @IsOptional()
  @Field(() => OrderItemListRelationFilter, {
    nullable: true,
  })
  orderItems?: OrderItemListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ShippingListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ShippingListRelationFilter)
  @IsOptional()
  @Field(() => ShippingListRelationFilter, {
    nullable: true,
  })
  shippings?: ShippingListRelationFilter;

  @ApiProperty({
    required: false,
    enum: EnumOrderStatus,
  })
  @IsEnum(EnumOrderStatus)
  @IsOptional()
  @Field(() => EnumOrderStatus, {
    nullable: true,
  })
  status?: "Option1";

  @ApiProperty({
    required: false,
    type: FloatNullableFilter,
  })
  @Type(() => FloatNullableFilter)
  @IsOptional()
  @Field(() => FloatNullableFilter, {
    nullable: true,
  })
  totalAmount?: FloatNullableFilter;
}

export { OrderWhereInput as OrderWhereInput };
