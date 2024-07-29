import { FC } from 'react';

import TopicsList from './TopicsList';

export type SectionCardProps = {
  id: number;
  title: string;
  description: string;
  order: number | null;
  courseId: string;
  createdAt: Date;
  updatedAt: Date;
  cname: string;
  topics: [];
};

const SectionCard: FC<SectionCardProps> = (props) => {
  const { title, description, topics, cname } = props;

  return (
    <div className='p-0 sm:p-2'>
      <h2 className='font-medium text-lg sm:text-xl'>
        {title}{' '}
        <span className='font-spaceGrotesk text-xs sm:text-sm text-gray-600'>
          {topics.length}
        </span>
      </h2>

      <p className='text-sm sm:text-sm text-gray-800'>{description}</p>

      {topics.length > 0 && <TopicsList topics={topics} cname={cname} />}
    </div>
  );
};

export default SectionCard;
