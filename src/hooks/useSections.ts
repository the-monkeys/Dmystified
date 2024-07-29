import { getAllSectionsAction } from '@/actions/sectionActions';
import useSWR from 'swr';

function useSections(cname: string) {
  const { data, isLoading } = useSWR(`/all-sections/${cname}`, () =>
    getAllSectionsAction(cname)
  );

  return {
    sections: data,
    isLoading,
  };
}

export default useSections;
