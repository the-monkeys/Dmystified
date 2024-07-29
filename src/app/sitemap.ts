import { BASE_URL } from '@/constants/common';
import { courseList } from '@/constants/courses';

export default async function sitemap() {
  const courseNames = [
    'golang_01',
    'react_02',
    'next_03',
    'javascript_04',
    'typescript_05',
  ];
  return [
    {
      url: `${BASE_URL}`,
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...courseNames.map((post) => ({
      url: BASE_URL + `${post}`,
      changeFrequency: 'monthly',
      priority: 1,
    })),
  ];
}
