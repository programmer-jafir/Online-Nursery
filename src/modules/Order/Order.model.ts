import {  model, Schema } from "mongoose";
import { TOrder, TUser } from "./Order.interface";
import { ProductSchema } from "../Product/Product.model";


const UserSchema = new Schema<TUser>({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  postCode: { type: Number, required: true },
  district: { type: String, required: true },
});


const OrderSchema = new Schema<TOrder>({
  user: { 
    type: UserSchema,
     required: true 
    }, 
  products: [{
    type:ProductSchema,
       required: true 
      }],
});

const OrderModel = model<TOrder>('Order', OrderSchema);

export default OrderModel;
