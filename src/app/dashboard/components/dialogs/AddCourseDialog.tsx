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

import AddCourseForm from '../forms/AddCourseForm';

const AddCourseDialog = () => {
  return (
    <Dialog>
      <div className='flex justify-end'>
        <DialogTrigger asChild>
          <Button size='sm'>
            Course
            <Icon name='RiAdd' className='ml-2' />
          </Button>
        </DialogTrigger>
      </div>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Course</DialogTitle>
        </DialogHeader>

        <AddCourseForm />
      </DialogContent>
    </Dialog>
  );
};

export default AddCourseDialog;
