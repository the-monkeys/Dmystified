import { Skeleton } from '../ui/skeleton';

export const CourseInfoCardSkeleton = () => {
  return (
    <div className='space-y-1'>
      <Skeleton className='w-20 h-4 rounded-full' />

      <Skeleton className='w-1/2 h-10' />

      <Skeleton className='h-4' />

      <Skeleton className='w-4/5 h-4' />

      <Skeleton className='w-40 h-4' />

      <Skeleton className='w-40 h-4' />
    </div>
  );
};
