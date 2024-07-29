'use server';

import { getAllSections } from '@/data-access/sections';

export const getAllSectionsAction = async (cname: string) => {
  const sections = await getAllSections(cname);

  return sections;
};
