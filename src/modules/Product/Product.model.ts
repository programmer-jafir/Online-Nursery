import { model, Schema } from "mongoose";
import { TProduct } from "./Product.interface";

const ProductSchema = new Schema<TProduct>({
    image: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    rating: { type: Number, required: true },
    category: { type: String, required: true },
  }, {
    timestamps: true,
  });
  
export  const Product = model<TProduct>('Product', ProductSchema);