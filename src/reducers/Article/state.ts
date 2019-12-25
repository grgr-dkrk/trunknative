import { ArticleListType, ArticleType } from '../../types/Article'

export type ArticleStateType = {
  items: ArticleListType
  currentItem: ArticleType
  editItem: Pick<ArticleType, 'title' | 'content' | 'tags'>
}

export const initialArticleData: Readonly<ArticleType> = {
  id: '',
  title: '',
  content: '',
  createdAt: '',
  updatedAt: undefined,
  location: undefined,
  tags: [],
}

export const initialArticleState: ArticleStateType = {
  items: [
    {
      id: '123',
      title: 'Test',
      content: `# Hello World

      this is a Sample.`,
      createdAt: '2019-03-23',
      updatedAt: undefined,
      location: undefined,
      tags: [],
    },
  ],
  currentItem: {
    id: '',
    title: '',
    content: '',
    createdAt: '',
    updatedAt: undefined,
    location: undefined,
    tags: [],
  },
  editItem: {
    title: '',
    content: '',
    tags: [],
  },
}
