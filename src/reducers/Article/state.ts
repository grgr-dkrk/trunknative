import { ArticleListType } from 'src/types/Article'

export type ArticleStateType = {
  items: ArticleListType
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
}
