import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import Icon from '../icon';
import { LogoFull } from '../logo';
import { Badge } from '../ui/badge';
import Section from './Section';

export function Footer() {
  return (
    <Section className='mx-auto max-w-7xl py-4 sm:py-6 px-4 lg:px-8 border-t-1 border-gray-200'>
      <div className='mb-10'>
        <Link href='https://x.com/dmystified_tech' target='_blank'>
          <Badge variant='outline' className='mb-2 hover:bg-gray-100'>
            Get latest updates on{' '}
            <Icon name='RiTwitterX' size={12} className='ml-1' />
          </Badge>
        </Link>

        <Image
          src={LogoFull}
          alt='Dmystified'
          width={150}
          height={150}
          className='mx-1'
        />

        <p className='m-1 w-fit text-xs font-medium text-gray-600'>
          Dmystified, 2024, All Rights Reserved
        </p>
      </div>

      <p className='text-xs font-medium text-gray-600 text-center'>
        Illustrations from{' '}
        <Link
          href='https://popsy.co/'
          className='font-medium text-orange/80 underline'
        >
          Popsy
        </Link>
      </p>

      <div className='p-1 flex flex-wrap justify-center gap-3'>
        <Link
          href='#'
          className='text-xs font-medium text-gray-600 hover:text-gray-900'
        >
          Terms
        </Link>

        <Link
          href='#'
          className='text-xs font-medium text-gray-600 hover:text-gray-900'
        >
          Policy
        </Link>
      </div>
    </Section>
  );
}
