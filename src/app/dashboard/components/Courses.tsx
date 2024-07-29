'use client';

import { CourseTableSkeleton } from '@/components/skeleton/tableSkeleton';
import useCourses from '@/hooks/useCourses';

import CourseTable from './CourseTable';

const Courses = () => {
  const { courses, isLoading } = useCourses();

  if (isLoading) return <CourseTableSkeleton />;

  return <CourseTable courses={courses || []} />;
};

export default Courses;
