export interface Section {
  id: number;
  title: string;
  description: string;
  order: number | null;
  courseId: string;
  createdAt: Date;
  updatedAt: Date;
}
