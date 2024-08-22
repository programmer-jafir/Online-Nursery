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
    titnamele: z.string().min(1).optional(),
    description: z.string().min(1).optional(),
    price: z.number().nonnegative().optional(),
    quantity: z.number().int().nonnegative().optional(),
    rating: z.number().min(0).max(5).optional(),
    category: z.string().min(1).optional(),
  }),
});

export const ProductValidation = {
  createProductValidation,
  updateProductValidation,
};
