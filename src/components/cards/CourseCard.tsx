import { FC } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Course } from '@/services/course/courseTypes';

import Icon from '../icon';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

const CourseCard: FC<{ course: Course }> = ({ course }) => {
  return (
    <div className='col-span-2 sm:col-span-1 p-4 sm:p-6 space-y-1 border-1 border-gray-100 bg-gray-50 rounded-2xl overflow-hidden'>
      <div className='flex justify-end'>
        <Badge variant={course.status === 'Live' ? 'live' : 'secondary'}>
          {course.status}
        </Badge>
      </div>

      <div className='w-fit h-10 sm:h-12 md:14'>
        <Image
          src={course.imagePath || ''}
          alt={course.title}
          width={100}
          height={100}
          className='h-full w-full'
        />
      </div>

      <h2 className='font-medium text-xl sm:text-2xl'>{course.title}</h2>

      <p className='text-sm text-gray-800 truncate'>{course.description}</p>

      <div className='pt-4'>
        <Button className='w-full group rounded-full' variant='outline' asChild>
          <Link href={`/${course.cname}`}>
            Course Details{' '}
            <div className='mx-2 group-hover:ml-3 group-hover:mr-1 transition-all'>
              <Icon name='RiArrowRight' size={16} />
            </div>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default CourseCard;
