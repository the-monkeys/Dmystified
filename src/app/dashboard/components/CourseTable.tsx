import { FC } from 'react';

import Link from 'next/link';

import Icon from '@/components/icon';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Course } from '@/services/course/courseTypes';

import DeleteCourseDialog from './dialogs/DeleteCourseDialog';
import UpdateCourseDialog from './dialogs/UpdateCourseDialog';

const CourseTable: FC<{ courses: Course[] }> = ({ courses }) => {
  return (
    <Table className='rounded-lg overflow-hidden'>
      {courses && courses.length === 0 && (
        <TableCaption>No course available.</TableCaption>
      )}

      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Title</TableHead>
          <TableHead className='text-center'>Status</TableHead>
          <TableHead className='text-center'>Actions</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {courses?.map((course, index) => {
          return (
            <TableRow key={course.id} className='hover:bg-gray-50'>
              <TableCell className='max-w-[100px]'>
                <p className='font-gray-800 truncate'>{course.cname}</p>
              </TableCell>

              <TableCell className='min-w-[250px] max-w-[300px]'>
                <p className='w-fit'>{course.title}</p>

                <p className='text-sm text-gray-600 truncate'>
                  {course.description}
                </p>
              </TableCell>

              <TableCell className='text-center'>
                <Badge
                  variant={course.status === 'Live' ? 'live' : 'secondary'}
                >
                  {course.status}
                </Badge>
              </TableCell>

              <TableCell className='flex justify-center'>
                <UpdateCourseDialog
                  id={course.id}
                  cname={course.cname}
                  title={course.title}
                  updatedAt={course.updatedAt}
                />

                <DeleteCourseDialog
                  id={course.id}
                  cname={course.cname}
                  title={course.title}
                />

                <Button
                  variant='ghost'
                  size='icon'
                  className='rounded-full hover:text-orange'
                  asChild
                >
                  <Link href={`/dashboard/${course.cname}`}>
                    <Icon name='RiArrowRightUp' size={18} />
                  </Link>
                </Button>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default CourseTable;
