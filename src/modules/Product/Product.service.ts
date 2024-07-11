import { TProduct } from "./Product.interface";
import { Product } from "./Product.model";

const createProduct = async (payLoad: TProduct) => {
  const result = await Product.create(payLoad);

  return result;
};

const getAllProduct = async (searchTerm: string) => {
  const query = searchTerm ? { $text: { $search: searchTerm } } : {};
  const result = await Product.find(query);
  return result;
};

const getProductById = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};
const updatedProductById = async (
  id: string,
  payLoad: Partial<TProduct>
) => {
  const result = await Product.findByIdAndUpdate(id, payLoad, 
    {new: true}
  );
  return result;
};

const deleteProductById = async (id: string) => {
  const result = await Product.findByIdAndDelete(id);
  return result;
};

export const ProductServices = {
  createProduct,
  getAllProduct,
  getProductById,
  deleteProductById,
  updatedProductById,
};
