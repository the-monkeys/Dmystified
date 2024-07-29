export interface Topic {
  id: string;
  title: string;
  url: string | null;
  path: string | null;
  sectionId: number;
  createdAt: Date;
  updatedAt: Date;
}
