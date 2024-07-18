import { getCourseInfoAction } from '@/actions/courseActions';
import useSWR from 'swr';

function useCourseInfo(cname: string) {
  const { data, isLoading } = useSWR(`/get-course-info/${cname}`, () =>
    getCourseInfoAction(cname)
  );

  return {
    course: data,
    isLoading,
  };
}

export default useCourseInfo;