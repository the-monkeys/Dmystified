import { getSectionById } from '@/data-access/sections';
import useSWR from 'swr';

function useSectionInfo(id: number) {
  const { data, isLoading } = useSWR(`/section-info/${id}`, () =>
    getSectionById(id)
  );

  return {
    section: data,
    isLoading,
  };
}

export default useSectionInfo;
