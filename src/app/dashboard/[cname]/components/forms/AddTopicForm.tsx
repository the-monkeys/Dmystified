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
import { toast } from '@/components/ui/use-toast';
import { addTopicSchema } from '@/lib/schema/topic';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { addTopicAction } from '../../actions';

const AddTopicForm = ({ id }: { id: number }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const form = useForm<z.infer<typeof addTopicSchema>>({
    defaultValues: {
      title: '',
      url: undefined,
      path: undefined,
    },
  });

  const onSubmit = async (values: z.infer<typeof addTopicSchema>) => {
    setLoading(true);

    try {
      const response = await addTopicAction({ id, ...values });

      if (response.status) {
        toast({
          title: 'Success',
          description: response.message,
        });

        form.reset({
          title: '',
          url: undefined,
          path: undefined,
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
        description: 'An error occurred while adding the topic.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form
        className='grid grid-cols-2 gap-4'
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name='title'
          render={({ field }) => (
            <FormItem className='col-span-2'>
              <FormLabel>Title</FormLabel>

              <FormControl>
                <Input placeholder='Enter topic title' {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='path'
          render={({ field }) => (
            <FormItem className='col-span-2'>
              <FormLabel>Path</FormLabel>

              <FormControl>
                <Input placeholder='Enter content path' {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='url'
          render={({ field }) => (
            <FormItem className='col-span-2'>
              <FormLabel>URL</FormLabel>

              <FormControl>
                <Input placeholder='Enter content url' {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <div className='col-span-2 pt-4 flex justify-end'>
          <Button type='submit' disabled={loading}>
            {loading && <Loader />}
            Add Topic
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default AddTopicForm;
