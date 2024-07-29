'use server';

import { getCourseByCname } from '@/data-access/courses';
import { getSectionById } from '@/data-access/sections';
import { getTopicById } from '@/data-access/topic';
import { db } from '@/db';
import { SectionTable, TopicTable } from '@/db/schema';
import { eq } from 'drizzle-orm';

export const addSectionAction = async ({
  cname,
  title,
  description,
}: {
  cname: string;
  title: string;
  description: string;
}) => {
  try {
    const existingCourse = await getCourseByCname(cname);

    if (!existingCourse) {
      return {
        status: false,
        message: 'Course not found.',
      };
    }

    await db.insert(SectionTable).values({
      title,
      description,
      courseId: existingCourse.id,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return {
      status: true,
      message: 'Section added successfully.',
    };
  } catch (error) {
    console.error('Error adding section:', error);

    return {
      status: false,
      message: `Error adding section to the course.`,
    };
  }
};

export const deleteSectionAction = async ({ id }: { id: number }) => {
  try {
    const existingSection = await getSectionById(id);

    if (!existingSection) {
      return {
        status: false,
        message: 'Section not found.',
      };
    }

    const deletedSection = await db
      .delete(SectionTable)
      .where(eq(SectionTable.id, existingSection.id))
      .returning({ title: SectionTable.title });

    return {
      status: true,
      message: `Section ${deletedSection[0].title} deleted successfully.`,
    };
  } catch (error) {
    console.error('Error deleting section:', error);

    return {
      status: false,
      message: `Error deleting the section.`,
    };
  }
};

export const updateSectionAction = async ({
  id,
  title,
  description,
}: {
  id: number;
  title: string;
  description: string;
}) => {
  try {
    const existingSection = await getSectionById(id);

    if (!existingSection) {
      return {
        status: false,
        message: 'Section not found.',
      };
    }

    await db
      .update(SectionTable)
      .set({
        title,
        description,
        updatedAt: new Date(),
      })
      .where(eq(SectionTable.id, id))
      .returning({
        title: SectionTable.title,
      });

    return {
      status: true,
      message: 'Section updated successfully.',
    };
  } catch (error) {
    console.error('Error updating the section:', error);

    return {
      status: false,
      message: `Error updating the section.`,
    };
  }
};

export const addTopicAction = async ({
  id,
  title,
  url,
  path,
}: {
  id: number;
  title: string;
  url?: string;
  path?: string;
}) => {
  try {
    const existingSection = await getSectionById(id);

    if (!existingSection) {
      return {
        status: false,
        message: 'Section not found.',
      };
    }

    await db.insert(TopicTable).values({
      title,
      url,
      path,
      sectionId: existingSection.id,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return {
      status: true,
      message: `Topic added to ${existingSection.title} successfully.`,
    };
  } catch (error) {
    console.error('Error adding the topic:', error);

    return {
      status: false,
      message: `Error adding the topic.`,
    };
  }
};

export const updateTopicAction = async ({
  id,
  title,
  url,
  path,
}: {
  id: string;
  title: string;
  url?: string;
  path?: string;
}) => {
  try {
    const existingTopic = await getTopicById(id);

    if (!existingTopic) {
      return {
        status: false,
        message: 'Topic not found.',
      };
    }

    const updatedTopic = await db
      .update(TopicTable)
      .set({
        title,
        url,
        path,
        updatedAt: new Date(),
      })
      .where(eq(TopicTable.id, existingTopic.id))
      .returning({ title: TopicTable.title });

    return {
      status: true,
      message: `Topic ${updatedTopic[0].title} updated successfully.`,
    };
  } catch (error) {
    console.error('Error updating topic:', error);

    return {
      status: false,
      message: `Error updating the topic.`,
    };
  }
};

export const deleteTopicAction = async ({ id }: { id: string }) => {
  try {
    const existingTopic = await getTopicById(id);

    if (!existingTopic) {
      return {
        status: false,
        message: 'Topic not found.',
      };
    }

    const deletedTopic = await db
      .delete(TopicTable)
      .where(eq(TopicTable.id, existingTopic.id))
      .returning({ title: TopicTable.title });

    return {
      status: true,
      message: `Topic ${deletedTopic[0].title} deleted successfully.`,
    };
  } catch (error) {
    console.error('Error deleting topic:', error);

    return {
      status: false,
      message: `Error deleting the topic.`,
    };
  }
};
