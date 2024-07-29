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

import UpdateCourseForm from '../forms/UpdateCourseForm';

const UpdateCourseDialog = ({
  id,
  cname,
  title,
  updatedAt,
}: {
  id: string;
  cname: string;
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
        <DialogHeader className='overflow-hidden'>
          <DialogTitle className='py-1 pr-4 truncate'>
            Update &apos;{title}&apos;
          </DialogTitle>
          <DialogDescription>
            Last Updated: {formatDate(updatedAt)}
          </DialogDescription>
        </DialogHeader>

        <UpdateCourseForm id={id} cname={cname} setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
};

export default UpdateCourseDialog;
