import { z } from 'zod';

export const addSectionSchema = z.object({
  title: z
    .string({ required_error: 'Title is required' })
    .min(1, 'Title is required'),
  description: z
    .string({ required_error: 'Description is required' })
    .min(1, 'Description is required'),
});

export const editSectionSchema = z.object({
  title: z
    .string({ required_error: 'Title is required' })
    .min(1, 'Title is required'),
  description: z
    .string({ required_error: 'Description is required' })
    .min(1, 'Description is required'),
});
