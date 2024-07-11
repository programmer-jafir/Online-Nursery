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
  name: string,
  description: string,
  category: string,
  tags: string[]
) => {
  const result = await Product.findByIdAndUpdate(id, {
    name,
    description,
    category,
    tags,
  });
  return result;
};

const deleteProductById = async (_id: string) => {
  const result = await Product.findByIdAndDelete(_id);
  return result;
};

export const ProductServices = {
  createProduct,
  getAllProduct,
  getProductById,
  deleteProductById,
  updatedProductById,
};
