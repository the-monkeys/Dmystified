import Link from 'next/link';

import Icon from '@/components/icon';
import { Topic } from '@/services/topic/topicTypes';

const TopicsList = ({ topics, cname }: { topics: Topic[]; cname: string }) => {
  return (
    <div className='mt-4 border-1 border-1-gray-100 divide-y-1 divide-gray-200 rounded-lg overflow-hidden'>
      {topics.map((topic) => (
        <div
          key={topic.id}
          className='px-2 sm:px-4 py-2 flex items-center gap-2 hover:bg-gray-50'
        >
          <p className='text-sm sm:text-base'>{topic.title}</p>

          {topic.path && (
            <Link
              target='_blank'
              href={`/${cname}/topic?id=${topic.id}`}
              className='p-1 text-sm text-orange/80 hover:text-orange'
            >
              <Icon name='RiArrowRightUp' size={18} />
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

export default TopicsList;
