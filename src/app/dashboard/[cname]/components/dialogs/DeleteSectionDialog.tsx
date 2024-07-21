'use client';

import { useState } from 'react';

import Icon from '@/components/icon';
import { Loader } from '@/components/loader';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { toast } from '@/components/ui/use-toast';

import { deleteSectionAction } from '../../actions';

const DeleteSectionDialog = ({ id, title }: { id: number; title: string }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleDelete = async () => {
    setLoading(true);

    try {
      const response = await deleteSectionAction({ id });

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
        description: 'An error occurred while deleting the section.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant='ghost'
          size='icon'
          className='rounded-full hover:text-red-600'
        >
          <Icon name='RiDeleteBin6' size={18} />
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Section</DialogTitle>
          <DialogDescription>Title: {title}</DialogDescription>
        </DialogHeader>

        <p>Are you sure you want to delete this section?</p>

        <div className='pt-4 flex justify-end'>
          <Button
            variant='destructive'
            disabled={loading}
            onClick={handleDelete}
          >
            {loading && <Loader />}
            Yes, Delete Topic
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteSectionDialog;