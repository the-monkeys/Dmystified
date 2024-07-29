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

import UpdateSectionForm from '../forms/UpdateSectionForm';

const UpdateSectionDialog = ({
  id,
  title,
  updatedAt,
}: {
  id: number;
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
          <DialogTitle>Update &apos;{title}&apos;</DialogTitle>
          <DialogDescription>
            Last Updated: {formatDate(updatedAt)}
          </DialogDescription>
        </DialogHeader>

        <UpdateSectionForm id={id} setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
};

export default UpdateSectionDialog;
