import { relations } from 'drizzle-orm';
import {
  integer,
  pgEnum,
  pgTable,
  serial,
  smallint,
  text,
  timestamp,
  uuid,
  varchar,
} from 'drizzle-orm/pg-core';

export const CourseStatusEnum = pgEnum('course_status', [
  'Live',
  'Upcoming',
  'Archive',
]);

export const CourseTable = pgTable('course', {
  id: uuid('id').primaryKey().defaultRandom(),
  cname: varchar('name', { length: 256 }).notNull().unique(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  imagePath: varchar('imagePath', { length: 256 }).notNull().default(''),
  status: CourseStatusEnum('status').notNull(),
  duration: varchar('duration', { length: 32 }).default(''),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt').notNull().defaultNow(),
});

export const SectionTable = pgTable('section', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  order: smallint('order'),
  courseId: uuid('courseId')
    .references(() => CourseTable.id, { onDelete: 'cascade' })
    .notNull(),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt').notNull().defaultNow(),
});

export const TopicTable = pgTable('topic', {
  id: uuid('id').primaryKey().defaultRandom(),
  title: text('title').notNull(),
  url: varchar('url', { length: 256 }),
  path: varchar('path', { length: 256 }),
  sectionId: integer('sectionId')
    .references(() => SectionTable.id, { onDelete: 'cascade' })
    .notNull(),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt').notNull().defaultNow(),
});

export const CourseTableRelations = relations(CourseTable, ({ many }) => ({
  sections: many(SectionTable),
}));

export const SectionTableRelations = relations(
  SectionTable,
  ({ one, many }) => ({
    course: one(CourseTable, {
      fields: [SectionTable.courseId],
      references: [CourseTable.id],
    }),
    topics: many(TopicTable),
  })
);

export const TopicTableRelations = relations(TopicTable, ({ one }) => ({
  section: one(SectionTable, {
    fields: [TopicTable.sectionId],
    references: [SectionTable.id],
  }),
}));
