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

const EnrollDialog = ({ title }: { title: string }) => {
  const handleEnrollNowClick = () => {
    window.open('https://api.whatsapp.com/send?phone=9641118267', '_blank');
  };

  return (
    <Dialog>
      <div className='pt-4'>
        <DialogTrigger asChild>
          <Button>Enroll Now</Button>
        </DialogTrigger>
      </div>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Enroll Now</DialogTitle>
        </DialogHeader>

        <p>
          To enroll in <span className='font-medium'>{title}</span>, reach out
          to us on WhatsApp.
        </p>

        <div className='pt-4 flex justify-end'>
          <Button onClick={handleEnrollNowClick}>
            <Icon name='RiWhatsapp' className='mr-2' />
            Contact Us
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EnrollDialog;
