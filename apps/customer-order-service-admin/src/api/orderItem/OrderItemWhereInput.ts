import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntFilter } from "../../util/IntFilter";

export type OrderItemWhereInput = {
  deliveryDate?: DateTimeNullableFilter;
  id?: StringFilter;
  order?: OrderWhereUniqueInput;
  position?: IntNullableFilter;
  price?: FloatNullableFilter;
  product?: IntNullableFilter;
  quantity?: IntFilter;
};
