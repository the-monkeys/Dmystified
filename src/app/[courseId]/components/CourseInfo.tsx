'use client';

import Image from 'next/image';

import Icon from '@/components/icon';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { courseList } from '@/constants/courses';

const CourseInfo = ({ courseName }: { courseName: string }) => {
  const course = courseList[courseName];
  const handleEnrollNowClick = () => {
    window.open('https://api.whatsapp.com/send?phone=9641118267', '_blank');
  };

  return (
    <div className='relative min-h-40 sm:min-h-52 p-4 shadow-lg shadow-gray-200 rounded-2xl overflow-hidden'>
      {!course.isLive && (
        <div className='mb-4'>
          <p className='font-medium text-sm text-red-500 text-center'>
            The course you are trying to access is not live yet. Please check
            back later.
          </p>
        </div>
      )}

      <Badge variant={course.isLive ? 'live' : 'outline'}>
        {course.isLive ? 'Live' : 'Upcoming'}
      </Badge>

      <div className='absolute -top-4 -right-4 w-fit h-32 sm:h-40 -z-10'>
        <Image
          src={course.imagePath || ''}
          alt={course.title}
          width={100}
          height={100}
          className='h-full w-full opacity-15'
        />
      </div>

      <h1 className='mt-2 py-2 font-semibold text-2xl sm:text-3xl md:text-4xl'>
        {course.title}
      </h1>

      <p className='text-sm sm:text-base'>{course.description}</p>

      <div className='mt-6 space-y-2'>
        <p className='text-sm'>
          Duration:{' '}
          <span className='font-medium'>
            {course.durationInHours ? `${course.durationInHours} Hours` : 'NA'}
          </span>
        </p>

        <p className='text-sm'>
          Language: <span className='font-medium'>{course.medium}</span>
        </p>
      </div>

      <div className='space-x-2'>
        <Button variant='secondary' className='px-6 mt-4 rounded-full'>
          Notes
        </Button>

        <Button
          className='px-6 mt-4 rounded-full'
          disabled={!course.isLive}
          onClick={handleEnrollNowClick}
        >
          Enroll Now
        </Button>
      </div>
    </div>
  );
};

export default CourseInfo;
