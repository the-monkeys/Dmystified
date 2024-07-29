import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { Loader } from '@/components/loader';
import { UpdateFormSkeleton } from '@/components/skeleton/formSkeleton';
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
import useTopicInfo from '@/hooks/useTopicInfo';
import { updateTopicSchema } from '@/lib/schema/topic';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { updateTopicAction } from '../../actions';

const UpdateTopicForm = ({
  id,
  setOpen,
}: {
  id: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const { topic, isLoading } = useTopicInfo(id);

  const form = useForm<z.infer<typeof updateTopicSchema>>({
    resolver: zodResolver(updateTopicSchema),
    defaultValues: {
      title: topic?.title || '',
      url: topic?.url || undefined,
      path: topic?.path || undefined,
    },
  });

  useEffect(() => {
    if (topic) {
      form.reset({
        title: topic?.title || '',
        url: topic?.url || undefined,
        path: topic?.path || undefined,
      });
    }
  }, [topic, form]);

  const onSubmit = async (values: z.infer<typeof updateTopicSchema>) => {
    setLoading(true);

    try {
      const response = await updateTopicAction({ id, ...values });

      if (response.status) {
        toast({
          title: 'Success',
          description: response.message,
        });
        setOpen(false);
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
        description: 'An error occurred while updating the topic.',
      });
    } finally {
      setLoading(false);
    }
  };

  if (isLoading) return <UpdateFormSkeleton />;

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
            Save Changes
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default UpdateTopicForm;
