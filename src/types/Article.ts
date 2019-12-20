import { TagListType } from './Tag';
import { LocationType } from './Location';

export type ArticleType = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  location: LocationType;
  tags: TagListType[];
};

export type ArticleListType = ArticleType[];
