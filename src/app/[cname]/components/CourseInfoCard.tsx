import Image from 'next/image';

import Section from '@/components/layout/Section';
import { Badge } from '@/components/ui/badge';
import { Course } from '@/services/course/courseTypes';
import { formatDate } from '@/utils/formatDate';

import EnrollDialog from './EnrollDialog';

const CourseInfoCard = ({ course }: { course?: Course }) => {
  return (
    <Section className='min-h-40 sm:min-h-52 p-4 sm:p-6 shadow-md space-y-1 rounded-2xl overflow-hidden'>
      <div className='flex justify-end'>
        <Badge variant={course?.status === 'Live' ? 'live' : 'secondary'}>
          {course?.status}
        </Badge>
      </div>

      <div className='w-fit h-12 sm:h-14 md:h-16'>
        <Image
          src={course?.imagePath || ''}
          alt={course?.title || ''}
          width={100}
          height={100}
          className='h-full w-full'
        />
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
          Medium: <span className='font-medium'>English</span>
        </p>

        <p className='text-sm text-gray-800'>
          Last Updated:{' '}
          <span className='font-medium'>
            {course ? formatDate(course?.updatedAt) : 'Not Available'}
          </span>
        </p>
      </div>

      {course?.status === 'Live' ? (
        <EnrollDialog title={course?.title} />
      ) : (
        <div className='pt-4'>
          <p className='font-medium text-sm text-red-500 text-center'>
            The course you are trying to access is either archived or not live
            at this time.
          </p>
        </div>
      )}
    </Section>
  );
};

export default CourseInfoCard;
