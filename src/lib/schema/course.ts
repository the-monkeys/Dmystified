import { z } from 'zod';

export const addCourseSchema = z.object({
  cname: z
    .string({ required_error: 'Name is required' })
    .regex(/^[a-z]+(?:_[a-z]+)*_[0-9]{2}$/, {
      message: 'Course name must be in the format: course_name_YY',
    }),
  title: z
    .string({ required_error: 'Title is required' })
    .min(1, 'Title is required'),
  description: z
    .string({ required_error: 'Description is required' })
    .min(1, 'Description is required'),
  imagePath: z.string({ invalid_type_error: 'Image Path has to be a string' }),
  status: z.enum(['Live', 'Upcoming', 'Archive']),
  duration: z.string().refine((value) => !value || !isNaN(Number(value)), {
    message: 'Duration must be a valid number',
  }),
});

export const updateCourseSchema = z.object({
  cname: z
    .string({ required_error: 'Name is required' })
    .regex(/^[a-z]+(?:_[a-z]+)*_[0-9]{2}$/, {
      message: 'Course name must be in the format: course_name_YY',
    }),
  title: z
    .string({ required_error: 'Title is required' })
    .min(1, 'Title is required'),
  description: z
    .string({ required_error: 'Description is required' })
    .min(1, 'Description is required'),
  imagePath: z.string({ invalid_type_error: 'Image Path has to be a string' }),
  status: z.enum(['Live', 'Upcoming', 'Archive']),
  duration: z.string().refine((value) => !value || !isNaN(Number(value)), {
    message: 'Duration must be a valid number',
  }),
});
