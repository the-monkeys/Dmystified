import Image from 'next/image';

import Section from '../layout/Section';
import { Logo, LogoFull } from '../logo';

const Hero = () => {
  return (
    <Section className='relative mb-10 sm:mb-16 min-h-60 flex flex-col justify-center items-center gap-2'>
      <div className='absolute bottom-0 right-0 h-full'>
        <Image
          src={Logo}
          alt='Dmsytified'
          width={150}
          height={150}
          className='w-full h-full opacity-10 sm:opacity-15'
        />
      </div>

      <div className='mx-auto h-8 sm:h-10'>
        <Image
          src={LogoFull}
          alt='Dmsytified'
          width={150}
          height={150}
          className='w-full h-full'
        />
      </div>

      <h1 className='w-full py-2 text-3xl sm:text-4xl md:text-5xl text-center'>
        <span className='font-spaceGrotesk font-semibold text-orange'>
          Demystify
        </span>{' '}
        Tech with{' '}
        <span className='font-spaceGrotesk font-semibold text-orange'>
          Expert
        </span>{' '}
        Learning
      </h1>

      <p className='mx-auto text-sm sm:text-base md:text-lg text-gray-900 text-center'>
        Unlock Tech Courses and Explore Open Source with Expert Guidance.
      </p>
    </Section>
  );
};

export default Hero;
