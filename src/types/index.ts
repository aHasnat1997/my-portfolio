export type TBlog = {
  id?: string;
  title: string;
  summary: string;
  content: string;
  imageUrl: string;
  likes?: number;
  createdAt?: Date;
  updatedAt?: Date;
};