import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { Skeleton } from '../ui/skeleton';

export const CourseTableSkeleton = () => {
  return (
    <Table className='mt-2 rounded-lg overflow-hidden'>
      <TableHeader>
        <TableRow className='bg-gray-50'>
          <TableHead>Name</TableHead>
          <TableHead className='min-w-[250px]'>Title</TableHead>
          <TableHead className='text-center'>Status</TableHead>
          <TableHead className='text-center'>Actions</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        <TableRow>
          <TableCell className='max-w-[100px]'>
            <Skeleton className='h-4' />
          </TableCell>

          <TableCell className='max-w-[300px]'>
            <Skeleton className='w-1/2 h-4' />
            <Skeleton className='mt-1 h-3' />
          </TableCell>

          <TableCell>
            <Skeleton className='h-4' />
          </TableCell>

          <TableCell>
            <div className='flex justify-center gap-1'>
              <Skeleton className='size-8 rounded-full' />
              <Skeleton className='size-8 rounded-full' />
              <Skeleton className='size-8 rounded-full' />
            </div>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell className='max-w-[100px]'>
            <Skeleton className='h-4' />
          </TableCell>

          <TableCell className='max-w-[300px]'>
            <Skeleton className='w-1/2 h-4' />
            <Skeleton className='mt-1 h-3' />
          </TableCell>

          <TableCell>
            <Skeleton className='h-4' />
          </TableCell>

          <TableCell>
            <div className='flex justify-center gap-1'>
              <Skeleton className='size-8 rounded-full' />
              <Skeleton className='size-8 rounded-full' />
              <Skeleton className='size-8 rounded-full' />
            </div>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell className='max-w-[100px]'>
            <Skeleton className='h-4' />
          </TableCell>

          <TableCell className='max-w-[300px]'>
            <Skeleton className='w-1/2 h-4' />
            <Skeleton className='mt-1 h-3' />
          </TableCell>

          <TableCell>
            <Skeleton className='h-4' />
          </TableCell>

          <TableCell>
            <div className='flex justify-center gap-1'>
              <Skeleton className='size-8 rounded-full' />
              <Skeleton className='size-8 rounded-full' />
              <Skeleton className='size-8 rounded-full' />
            </div>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell className='max-w-[100px]'>
            <Skeleton className='h-4' />
          </TableCell>

          <TableCell className='max-w-[300px]'>
            <Skeleton className='w-1/2 h-4' />
            <Skeleton className='mt-1 h-3' />
          </TableCell>

          <TableCell>
            <Skeleton className='h-4' />
          </TableCell>

          <TableCell className='flex justify-center gap-1'>
            <Skeleton className='size-8 rounded-full' />
            <Skeleton className='size-8 rounded-full' />
            <Skeleton className='size-8 rounded-full' />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
