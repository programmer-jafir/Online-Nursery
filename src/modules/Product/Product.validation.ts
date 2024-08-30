import { z } from "zod";

export const createProductValidation = z.object({
  body: z.object({
    // _id: z.string().optional(),
    image: z.string().url(),
    name: z.string(),
    description: z.string(),
    price: z.string(),
    quantity: z.string(),
    rating: z.string(),
    category: z.string(),
  }),
});
export const updateProductValidation = z.object({
  body: z.object({
    _id: z.string().optional(),
    image: z.string().url().optional(),
    name: z.string().optional(),
    description: z.string().optional(),
    price: z.string().optional(),
    quantity: z.string().optional(),
    rating: z.string().optional(),
    category: z.string().optional(),
  }),
});

export const ProductValidation = {
  createProductValidation,
  updateProductValidation,
};
