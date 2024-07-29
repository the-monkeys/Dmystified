import { FC } from 'react';

import TopicsList from './TopicList';
import AddTopicDialog from './dialogs/AddTopicDialog';
import DeleteSectionDialog from './dialogs/DeleteSectionDialog';
import UpdateSectionDialog from './dialogs/UpdateSectionDialog';

export type SectionCardProps = {
  id: number;
  title: string;
  description: string;
  order: number | null;
  courseId: string;
  createdAt: Date;
  updatedAt: Date;
  topics: [];
};

const SectionCard: FC<SectionCardProps> = (props) => {
  const { id, title, updatedAt, topics } = props;

  return (
    <div className='space-y-4'>
      <div className='flex items-center justify-between gap-2'>
        <h2 className='font-medium text-base sm:text-lg truncate'>
          {title}{' '}
          <span className='font-spaceGrotesk text-xs sm:text-sm text-gray-600'>
            {topics?.length}
          </span>
        </h2>

        <div className='flex items-center'>
          <UpdateSectionDialog id={id} title={title} updatedAt={updatedAt} />

          <DeleteSectionDialog id={id} title={title} />

          <AddTopicDialog id={id} title={title} />
        </div>
      </div>

      {topics.length > 0 && <TopicsList topics={topics} />}
    </div>
  );
};

export default SectionCard;
