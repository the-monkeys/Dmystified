'use client';

import { useState } from 'react';

import Icon from '@/components/icon';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { formatDate } from '@/utils/formatDate';

import UpdateTopicForm from '../forms/UpdateTopicForm';

const UpdateTopicDialog = ({
  id,
  title,
  updatedAt,
}: {
  id: string;
  title: string;
  updatedAt: Date;
}) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant='ghost'
          size='icon'
          className='rounded-full hover:text-blue-600'
        >
          <Icon name='RiEditBox' size={18} />
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle className=''>Update &apos;{title}&apos;</DialogTitle>
          <DialogDescription>
            Last Updated: {formatDate(updatedAt)}
          </DialogDescription>
        </DialogHeader>

        <UpdateTopicForm id={id} setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
};

export default UpdateTopicDialog;
