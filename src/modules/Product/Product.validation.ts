import { z } from "zod";

export const createProductValidation = z.object({
  body: z.object({
    _id: z.string().optional(),
    image: z.string().url(),
    title: z.string().min(1),
    description: z.string().min(1),
    price: z.number().nonnegative(),
    quantity: z.number().int().nonnegative(),
    rating: z.number().min(0).max(5),
    category: z.string().min(1),
  }),
});
export const updateProductValidation = z.object({
  body: z.object({
    _id: z.string().optional(),
    image: z.string().url().optional(),
    title: z.string().min(1).optional(),
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
