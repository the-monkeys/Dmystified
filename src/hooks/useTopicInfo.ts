import { getTopicById } from '@/data-access/topic';
import useSWR from 'swr';

const useTopicInfo = (id: string) => {
  const { data, isLoading } = useSWR(`/topic-info/${id}`, () =>
    getTopicById(id)
  );

  return {
    topic: data,
    isLoading,
  };
};

export default useTopicInfo;
