'use client';

import { Topic } from '@/services/topic/topicTypes';

import DeleteTopicDialog from './dialogs/DeleteTopicDialog';
import UpdateTopicDialog from './dialogs/UpdateTopicDialog';

const TopicsList = ({ topics }: { topics: Topic[] }) => {
  return (
    <div className='border-1 border-1-gray-100 divide-y-1 divide-gray-200 rounded-lg overflow-hidden'>
      {topics.map((topic) => (
        <div key={topic.id} className='px-2 sm:px-4 py-2 flex items-center'>
          <p className='flex-1 text-sm sm:text-base'>{topic.title}</p>

          <div className='flex flex-col sm:flex-row'>
            <UpdateTopicDialog
              id={topic.id}
              title={topic.title}
              updatedAt={topic.updatedAt}
            />

            <DeleteTopicDialog id={topic.id} title={topic.title} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopicsList;
