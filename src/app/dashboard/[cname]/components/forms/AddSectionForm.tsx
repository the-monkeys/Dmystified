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
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import { addSectionSchema } from '@/lib/schema/section';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { addSectionAction } from '../../actions';

const AddSectionForm = ({ cname }: { cname: string }) => {
  const [loading, setLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof addSectionSchema>>({
    resolver: zodResolver(addSectionSchema),
    defaultValues: {
      title: '',
      description: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof addSectionSchema>) => {
    setLoading(true);

    try {
      const response = await addSectionAction({ cname, ...values });

      if (response.status) {
        toast({
          title: 'Success',
          description: response.message,
        });

        form.reset({
          title: '',
          description: '',
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
        description: 'An error occurred while adding the section.',
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

        <div className='col-span-2 pt-4 flex justify-end'>
          <Button type='submit' disabled={loading}>
            {loading && <Loader />}
            Add Section
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default AddSectionForm;
