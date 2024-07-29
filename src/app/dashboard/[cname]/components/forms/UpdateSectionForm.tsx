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
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import useSectionInfo from '@/hooks/useSectionInfo';
import { editSectionSchema } from '@/lib/schema/section';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { updateSectionAction } from '../../actions';

const UpdateSectionForm = ({
  id,
  setOpen,
}: {
  id: number;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const { section, isLoading } = useSectionInfo(id);

  const form = useForm<z.infer<typeof editSectionSchema>>({
    resolver: zodResolver(editSectionSchema),
    defaultValues: {
      title: '',
      description: '',
    },
  });

  useEffect(() => {
    if (section) {
      form.reset({
        title: section.title || '',
        description: section.description || '',
      });
    }
  }, [section, form]);

  const onSubmit = async (values: z.infer<typeof editSectionSchema>) => {
    setLoading(true);

    try {
      const response = await updateSectionAction({ id, ...values });

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
        description: 'An error occurred while updating the section.',
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
            Save Changes
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default UpdateSectionForm;
