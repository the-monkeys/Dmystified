'use server';

import { db } from '@/db';
import { CourseTable } from '@/db/schema';
import { asc, eq } from 'drizzle-orm';

export async function getAllCourses() {
  const courses = await db.query.CourseTable.findMany({
    orderBy: [asc(CourseTable.createdAt)],
  });

  return courses;
}

export async function getCourseById(id: string) {
  const course = await db.query.CourseTable.findFirst({
    where: eq(CourseTable.id, id),
  });

  return course;
}

export async function getCourseByCname(cname: string) {
  const course = await db.query.CourseTable.findFirst({
    where: eq(CourseTable.cname, cname),
  });

  return course;
}

export async function getCourseInfo(cname: string) {
  const course = await db.query.CourseTable.findFirst({
    where: eq(CourseTable.cname, cname),
  });

  return course;
}
