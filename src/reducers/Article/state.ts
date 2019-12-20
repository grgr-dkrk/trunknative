import { ArticleListType } from 'src/types/Article';

export type ArticleStateType = {
  items: ArticleListType;
};

export const initialArticleState: ArticleStateType = {
  items: [],
};
