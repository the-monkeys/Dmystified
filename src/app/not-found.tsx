import Image from 'next/image';

import Container from '@/components/layout/Container';

import NotFound from '../../public/not_found.svg';

export default function NotFoundPage() {
  return (
    <Container className='min-h-screen space-y-4'>
      <h1 className='font-spaceGrotesk font-semibold text-2xl sm:text-3xl md:text-4xl text-center'>
        <span className='text-orange'>404</span>
        <br /> Page Not Found
      </h1>

      <div className='mx-auto size-48 sm:size-60 md:size-72'>
        <Image
          src={NotFound}
          alt='Not Found'
          width={200}
          height={200}
          className='w-full h-full'
        />
      </div>
    </Container>
  );
}
