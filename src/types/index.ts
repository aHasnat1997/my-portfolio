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

export type TProject = {
  id?: string;
  title: string;
  summary: string;
  aboutProject: string;
  imageUrl: string;
  liveLink?: string;
  githubLinkFoClient?: string;
  githubLinkFoServer?: string;
  createdAt?: Date;
  updatedAt?: Date;
}