import { notFound } from 'next/navigation';

import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import { getTopicById } from '@/data-access/topic';
import { formatDate } from '@/utils/formatDate';
import getMdxComponent from '@/utils/getMdxComponent';
import { z } from 'zod';

const idSchema = z.object({
  id: z.string().uuid(),
});

const TopicContentPage = async ({
  searchParams,
}: {
  searchParams: {
    id: string;
  };
}) => {
  const idValidation = idSchema.safeParse(searchParams);
  if (!idValidation.success) {
    notFound();
  }

  const topic = await getTopicById(searchParams.id);

  if (topic?.path === null) {
    notFound();
  }

  const MdxComponent = await getMdxComponent(topic?.path);

  return (
    <Container className='min-h-screen space-y-4'>
      <Section className='mb-10 sm:mb-16 space-y-4'>
        <h1 className='py-4 font-spaceGrotesk font-semibold text-2xl sm:text-3xl md:text-4xl text-center'>
          {topic?.title}
        </h1>

        <p className='text-sm text-gray-800'>
          Last Updated:{' '}
          <span className='font-medium'>
            {topic ? formatDate(topic?.updatedAt) : 'Not Available'}
          </span>
        </p>
      </Section>

      <MdxComponent />
    </Container>
  );
};

export default TopicContentPage;
