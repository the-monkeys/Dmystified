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
import { Separator } from '@/components/ui/separator';

import CourseDetails from './components/CourseDetails';
import SectionCard, { SectionCardProps } from './components/SectionCard';
import AddSectionDialog from './components/dialogs/AddSectionDialog';

export default async function DashboardCoursePage({
  params,
}: {
  params: {
    cname: string;
  };
}) {
  const course = await getCourseWithSectionInfo(params.cname);

  const { sections, ...courseDetails } = course as any;

  return (
    <Container className='min-h-screen space-y-4'>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href='/'>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href='/dashboard'>Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className='font-medium cursor-default'>
              {params.cname}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <CourseDetails course={courseDetails} />

      <Separator />

      <Section className='pb-20 space-y-2'>
        <h3 className='font-medium text-xl sm:text-2xl'>
          Sections
          <span className='block text-sm text-gray-800'>
            Total Sections: {sections.length}
          </span>
        </h3>

        <AddSectionDialog cname={params.cname} />

        <div className='space-y-4'>
          {sections.map((section: SectionCardProps) => {
            return <SectionCard key={section.id} {...section} />;
          })}
        </div>
      </Section>
    </Container>
  );
}
