import { useState } from 'react';

import { Loader } from '@/components/loader';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import { addCourseSchema } from '@/lib/schema/course';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { addCourseAction } from '../../actions';

const AddCourseForm = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof addCourseSchema>>({
    resolver: zodResolver(addCourseSchema),
    defaultValues: {
      cname: '',
      title: '',
      description: '',
      imagePath: '',
      status: 'Upcoming',
      duration: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof addCourseSchema>) => {
    setLoading(true);

    try {
      const response = await addCourseAction(values);

      if (response.status) {
        toast({
          title: 'Success',
          description: response.message,
        });

        form.reset({
          cname: '',
          title: '',
          description: '',
          imagePath: '',
          status: 'Upcoming',
          duration: '',
        });
      } else {
        toast({
          variant: 'destructive',
          title: 'Error',
          description: response.message,
        });
      }
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'An error occurred while adding the course.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='grid grid-cols-2 gap-4'
      >
        <FormField
          control={form.control}
          name='cname'
          render={({ field }) => (
            <FormItem className='col-span-2'>
              <FormLabel>Name</FormLabel>

              <ul className='px-2 pb-2 list-decimal list-inside'>
                <li className='text-sm text-gray-600'>
                  Should be in format course_name_YY
                </li>

                <li className='text-sm text-gray-600'>
                  Contain only lowercase letters
                </li>
              </ul>

              <FormControl>
                <Input placeholder='Enter course name' {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='title'
          render={({ field }) => (
            <FormItem className='col-span-2'>
              <FormLabel>Title</FormLabel>

              <FormControl>
                <Input placeholder='Enter course title' {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='imagePath'
          render={({ field }) => (
            <FormItem className='col-span-2'>
              <FormLabel>Image Path</FormLabel>

              <FormControl>
                <Input placeholder='Enter image path' {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='description'
          render={({ field }) => (
            <FormItem className='col-span-2'>
              <FormLabel>Description</FormLabel>

              <FormControl>
                <Textarea placeholder='Enter course description' {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='status'
          render={({ field }) => (
            <FormItem className='col-span-2 sm:col-span-1'>
              <FormLabel>Status</FormLabel>

              <FormControl>
                <Select onValueChange={field.onChange}>
                  <SelectTrigger>
                    <SelectValue placeholder='Select' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='Live'>Live</SelectItem>
                    <SelectItem value='Upcoming'>Upcoming</SelectItem>
                    <SelectItem value='Archive'>Archive</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='duration'
          render={({ field }) => (
            <FormItem className='col-span-2 sm:col-span-1'>
              <FormLabel>Duration (in hours)</FormLabel>

              <FormControl>
                <Input type='number' placeholder='Enter duration' {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <div className='pt-4 flex justify-end col-span-2'>
          <Button type='submit' disabled={loading}>
            {loading && <Loader />}
            Add Course
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default AddCourseForm;
