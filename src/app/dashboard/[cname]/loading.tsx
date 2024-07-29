import Container from '@/components/layout/Container';
import { Loader } from '@/components/loader';

export default function Loading() {
  return (
    <Container className='min-h-screen space-y-4'>
      <div>
        <Loader className='mx-auto' />
        <p className='text-sm text-center'>Fetching Course Details</p>
      </div>
    </Container>
  );
}
