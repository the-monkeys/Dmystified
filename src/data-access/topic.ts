'use server';

import { db } from '@/db';
import { TopicTable } from '@/db/schema';
import { eq } from 'drizzle-orm';

export const getTopicById = async (id: string) => {
  const topic = db.query.TopicTable.findFirst({
    where: eq(TopicTable.id, id),
  });

  return topic;
};
