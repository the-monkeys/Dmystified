'use server';

import { getAllCourses, getCourseInfo } from '@/data-access/courses';
import { getAllSectionsWithTopics } from '@/data-access/sections';

export const getCoursesAction = async () => {
  const courses = await getAllCourses();

  return courses;
};

export const getCourseInfoAction = async (cname: string) => {
  const course = await getCourseInfo(cname);

  return course;
};

export const getCourseWithSectionInfo = async (cname: string) => {
  const course = await getAllSectionsWithTopics(cname);

  return course;
};
