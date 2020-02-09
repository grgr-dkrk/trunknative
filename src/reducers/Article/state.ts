import { ArticleListType, ArticleType } from '../../types/Article'

export type ArticleStateType = {
  items: ArticleListType
  currentDisplayItem: ArticleType
  editingItem: ArticleType
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
      id: 'Home',
      title: 'Home',
      content: `# Hello World

      this is a Sample.`,
      createdAt: '2019-03-23',
      updatedAt: undefined,
      location: undefined,
      tags: [],
    },
  ],
  currentDisplayItem: {
    id: '',
    title: '',
    content: '',
    createdAt: '',
    updatedAt: undefined,
    location: undefined,
    tags: [],
  },
  editingItem: {
    id: '',
    title: '',
    content: '',
    createdAt: '',
    updatedAt: undefined,
    location: undefined,
    tags: [],
  },
}
