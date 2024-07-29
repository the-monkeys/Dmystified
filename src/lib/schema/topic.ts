import { z } from 'zod';

export const addTopicSchema = z.object({
  title: z
    .string({ required_error: 'Title is required' })
    .min(1, 'Title is required'),
  url: z.string().url().optional(),
  path: z.string().url().optional(),
});

export const updateTopicSchema = z.object({
  title: z
    .string({ required_error: 'Title is required' })
    .min(1, 'Title is required'),
  url: z.string().url().optional(),
  path: z.string().optional(),
});
