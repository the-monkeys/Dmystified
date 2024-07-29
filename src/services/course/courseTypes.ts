export interface Course {
  id: string;
  cname: string;
  title: string;
  description: string;
  imagePath: string;
  status: 'Live' | 'Upcoming' | 'Archive';
  duration: string | null;
  createdAt: Date;
  updatedAt: Date;
}
