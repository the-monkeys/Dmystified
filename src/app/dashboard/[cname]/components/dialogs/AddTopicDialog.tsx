'use client';

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

import AddTopicForm from '../forms/AddTopicForm';

const AddTopicDialog = ({ id, title }: { id: number; title: string }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant='ghost'
          size='icon'
          className='rounded-full hover:text-orange'
        >
          <Icon name='RiAdd' size={18} />
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader className='overflow-hidden'>
          <DialogTitle>Add New Topic</DialogTitle>
          <DialogDescription className='truncate'>
            Section: {title}
          </DialogDescription>
        </DialogHeader>

        <AddTopicForm id={id} />
      </DialogContent>
    </Dialog>
  );
};

export default AddTopicDialog;
