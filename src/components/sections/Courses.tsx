import { getAllCourses } from '@/data-access/courses';

import CourseCard from '../cards/CourseCard';
import Section from '../layout/Section';

const Courses = async () => {
  const courses = await getAllCourses();

  return (
    <Section id='courses' className='mb-10 sm:mb-16 space-y-6'>
      <div className='text-center space-y-2'>
        <h4 className='mx-auto w-fit py-2 font-spaceGrotesk text-2xl sm:text-3xl md:text-4xl border-b-1 border-gray-200'>
          <span className='text-orange'>Courses</span> we offer
        </h4>

        <p className='max-w-xl leading-relaxed text-gray-800 text-sm md:text-base mx-auto'>
          Choose from a wide range of tech courses and become industry-ready
          with the latest tech stack
        </p>
      </div>

      {courses.length > 0 ? (
        <div className='grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4'>
          {courses.map((course) => {
            return <CourseCard key={course.id} course={course} />;
          })}
        </div>
      ) : (
        <p className='text-gray-800 text-center'>
          No courses available at the moment. Stay tuned!
        </p>
      )}
    </Section>
  );
};

export default Courses;
