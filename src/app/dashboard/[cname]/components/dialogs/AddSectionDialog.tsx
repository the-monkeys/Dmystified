'use client';

import Icon from '@/components/icon';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import AddSectionForm from '../forms/AddSectionForm';

const AddSectionDialog = ({ cname }: { cname: string }) => {
  return (
    <Dialog>
      <div className='flex justify-end'>
        <DialogTrigger asChild>
          <Button size='sm'>
            Section
            <Icon name='RiAdd' className='ml-2' />
          </Button>
        </DialogTrigger>
      </div>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Section</DialogTitle>
        </DialogHeader>

        <AddSectionForm cname={cname} />
      </DialogContent>
    </Dialog>
  );
};

export default AddSectionDialog;
