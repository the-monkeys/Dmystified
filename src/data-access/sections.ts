'use server';

import { db } from '@/db';
import { CourseTable, SectionTable } from '@/db/schema';
import { eq } from 'drizzle-orm';

import { getCourseByCname } from './courses';

export async function getAllSections(cname: string) {
  const existingCourse = await getCourseByCname(cname);

  if (!existingCourse) {
    return undefined;
  }

  const sections = await db.query.SectionTable.findMany({
    where: eq(SectionTable.courseId, existingCourse.id),
  });

  return sections;
}

export async function getAllSectionsWithTopics(cname: string) {
  const existingCourse = await getCourseByCname(cname);

  if (!existingCourse) {
    return new Error('Course not found.');
  }

  const sections = await db.query.CourseTable.findFirst({
    where: eq(CourseTable.id, existingCourse.id),
    with: {
      sections: {
        orderBy: (sections, { asc }) => [asc(sections.createdAt)],
        with: {
          topics: {
            orderBy: (topics, { asc }) => [asc(topics.createdAt)],
          },
        },
      },
    },
  });

  return sections;
}

export async function getSectionById(id: number) {
  const section = await db.query.SectionTable.findFirst({
    where: eq(SectionTable.id, id),
  });

  return section;
}
