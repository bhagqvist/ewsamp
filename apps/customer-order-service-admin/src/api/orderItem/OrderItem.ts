import { Order } from "../order/Order";

export type OrderItem = {
  createdAt: Date;
  deliveryDate: Date | null;
  id: string;
  order?: Order | null;
  position: number | null;
  price: number | null;
  product: number | null;
  quantity: number;
  updatedAt: Date;
};
