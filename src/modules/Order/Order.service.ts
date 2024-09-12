import { Types } from "mongoose";
import { TOrder } from "./Order.interface";
import OrderModel from "./Order.model";
import { Product } from "../Product/Product.model";

export const createOrder = async (user: Types.ObjectId, products: { _id: Types.ObjectId, quantity: number }[]): Promise<TOrder> => { //user: TUser

  const result = await OrderModel.create({ user, products });

  for (const orderedProduct of products) {

    const product = await Product.findById(orderedProduct._id);

    if (product) {
  
      if (product.quantity >= orderedProduct.quantity) {
        
        product.quantity -= orderedProduct.quantity;
        await product.save();  
      } else {
        throw new Error(`Not enough stock for product ${product.name}`);
      }
    }
  }

  const populatedOrder = await OrderModel.findById(result._id)
    .populate('products')  
    .exec();  


  return populatedOrder as TOrder;  //

};



export const OrderServices = {
  createOrder,
}
