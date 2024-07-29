'use server';

import { getCourseByCname, getCourseById } from '@/data-access/courses';
import { db } from '@/db';
import { CourseTable } from '@/db/schema';
import { eq } from 'drizzle-orm';

export const addCourseAction = async ({
  cname,
  title,
  description,
  imagePath,
  status,
  duration,
}: {
  cname: string;
  title: string;
  description: string;
  imagePath: string;
  status: 'Live' | 'Upcoming' | 'Archive';
  duration: string;
}) => {
  try {
    const existingCourse = await getCourseByCname(cname);

    if (existingCourse) {
      return {
        status: false,
        message: 'A course with the same name already exists.',
      };
    }

    await db.insert(CourseTable).values({
      cname,
      title,
      description,
      imagePath,
      status,
      duration,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return {
      status: true,
      message: 'Course added successfully.',
    };
  } catch (error) {
    console.error('Error adding course:', error);

    return {
      status: false,
      message: `Error adding the course.`,
    };
  }
};

export const deleteCourseAction = async ({ cname }: { cname: string }) => {
  try {
    const existingCourse = await getCourseByCname(cname);

    if (!existingCourse) {
      return {
        status: false,
        message: 'Course not found.',
      };
    }

    const deletedCourse = await db
      .delete(CourseTable)
      .where(eq(CourseTable.id, existingCourse.id))
      .returning({ title: CourseTable.title });

    return {
      status: true,
      message: `Course ${deletedCourse[0].title} deleted successfully.`,
    };
  } catch (error) {
    console.error('Error deleting course:', error);

    return {
      status: false,
      message: `Error deleting the course.`,
    };
  }
};

export const updateCourseAction = async ({
  id,
  cname,
  title,
  description,
  imagePath,
  status,
  duration,
}: {
  id: string;
  cname: string;
  title: string;
  description: string;
  imagePath: string;
  status: 'Live' | 'Upcoming' | 'Archive';
  duration: string;
}) => {
  try {
    const existingCourse = await getCourseById(id);

    if (!existingCourse) {
      return {
        status: false,
        message: `Course not found.`,
      };
    }

    const updatedCourse = await db
      .update(CourseTable)
      .set({
        cname,
        title,
        description,
        imagePath,
        status,
        duration,
        updatedAt: new Date(),
      })
      .where(eq(CourseTable.id, id))
      .returning({ title: CourseTable.title });

    return {
      status: true,
      message: `Course ${updatedCourse[0].title} updated successfully.`,
    };
  } catch (error) {
    console.error('Error updating course:', error);

    return {
      status: false,
      message: `Error updating the course.`,
    };
  }
};
