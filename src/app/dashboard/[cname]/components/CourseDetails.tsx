'use client';

import Link from 'next/link';

import Icon from '@/components/icon';
import Section from '@/components/layout/Section';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Course } from '@/services/course/courseTypes';
import { formatDate } from '@/utils/formatDate';

const CourseDetails = ({ course }: { course?: Course }) => {
  return (
    <Section className='space-y-1'>
      <div className='space-x-2'>
        <Badge variant={course?.status === 'Live' ? 'live' : 'secondary'}>
          {course?.status}
        </Badge>
      </div>

      <h1 className='font-spaceGrotesk font-semibold text-2xl sm:text-3xl md:text-4xl'>
        {course?.title}
      </h1>

      <p className='text-sm sm:text-base text-gray-800'>
        {course?.description}
      </p>

      <div className='pt-4 space-y-1'>
        <p className='text-sm text-gray-800'>
          Duration:{' '}
          <span className='font-medium'>
            {course?.duration ? `${course.duration} Hours` : 'Not Available'}
          </span>
        </p>

        <p className='text-sm text-gray-800'>
          Created On:{' '}
          <span className='font-medium'>
            {course ? formatDate(course?.createdAt) : 'Not Available'}
          </span>
        </p>

        <p className='text-sm text-gray-800'>
          Last Updated:{' '}
          <span className='font-medium'>
            {course ? formatDate(course?.updatedAt) : 'Not Available'}
          </span>
        </p>
      </div>

      <div className='flex justify-end'>
        <Button className='w-fit group rounded-full' variant='outline' asChild>
          <Link href={`/${course?.cname}`}>
            Go to course
            <div className='mx-2 group-hover:ml-3 group-hover:mr-1 transition-all'>
              <Icon name='RiArrowRight' size={16} />
            </div>
          </Link>
        </Button>
      </div>
    </Section>
  );
};

export default CourseDetails;
