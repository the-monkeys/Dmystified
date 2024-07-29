import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { getCourseWithSectionInfo } from '@/actions/courseActions';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { getCourseByCname } from '@/data-access/courses';

import CourseInfoCard from './components/CourseInfoCard';
import SectionCard, { SectionCardProps } from './components/SectionCard';

export async function generateMetadata({
  params,
}: {
  params: { cname: string };
}): Promise<Metadata> {
  const course = await getCourseByCname(params.cname);

  return {
    title: `${course?.title} | Dmystified`,
    description: course?.description,
  };
}

export default async function CoursePage({
  params,
}: {
  params: {
    cname: string;
  };
}) {
  const course = await getCourseWithSectionInfo(params.cname);

  if (course instanceof Error) {
    notFound();
  }

  const { sections, ...courseDetails } = course as any;

  return (
    <Container className='min-h-screen space-y-4'>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href='/#courses'>All</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className='font-medium cursor-default'>
              {course?.title}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <CourseInfoCard course={courseDetails} />

      {course?.status === 'Live' && (
        <Section className='pb-20 flex flex-col space-y-4'>
          <h2 className='self-center px-6 py-2 font-medium text-xl sm:text-2xl border-b-1 border-gray-200'>
            Course <span className='font-semibold text-orange'>Curriculum</span>
          </h2>

          <p className='text-sm font-gray-800 text-center'>
            Sections: <span className='font-medium'>{sections?.length}</span>
          </p>

          <div className='space-y-4'>
            {sections.map((section: SectionCardProps) => {
              return (
                <SectionCard
                  key={section.id}
                  {...section}
                  cname={params.cname}
                />
              );
            })}
          </div>
        </Section>
      )}
    </Container>
  );
}
