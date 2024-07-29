import { Metadata } from 'next';

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

import Courses from './components/Courses';
import AddCourseDialog from './components/dialogs/AddCourseDialog';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Dashboard | Dmystified`,
    description:
      'Manage and monitor administrative tasks efficiently with the Dmystified admin dashboard. Track analytics, manage users, and oversee content seamlessly.',
  };
}

const AdminDashboard = () => {
  return (
    <Container className='min-h-screen space-y-4 sm:space-y-6'>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href='/'>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className='font-medium cursor-default'>
              Dashboard
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <h1 className='font-spaceGrotesk font-medium text-2xl sm:text-3xl md:text-4xl'>
        <span className='font-semibold text-orange'>Admin</span> Dashboard
      </h1>

      <Separator />

      <Section className='space-y-2'>
        <h3 className='font-medium text-xl sm:text-2xl'>Courses</h3>

        <AddCourseDialog />

        <Courses />
      </Section>
    </Container>
  );
};

export default AdminDashboard;
