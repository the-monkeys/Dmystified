import { getCoursesAction } from '@/actions/courseActions';
import useSWR from 'swr';

function useCourses() {
  const { data, isLoading } = useSWR('/get-all-courses', getCoursesAction);

  return {
    courses: data,
    isLoading,
  };
}

export default useCourses;