import { ArticleType, ArticleListType } from 'src/types/Article'

export const ADD_ARTICLE = 'ADD_ARTICLE' as const
export const REMOVE_ARTICLE = 'REMOVE_ARTICLE' as const
export const EDIT_ARTICLE = 'EDIT_ARTICLE' as const
export const SET_ARTICLE_LIST = 'SET_ARTICLE_LIST' as const
export const FETCH_ARTICLE_START = 'FETCH_ARTICLE_START' as const
export const FETCH_ARTICLE_SUCCEED = 'FETCH_ARTICLE_SUCCEED' as const
export const FETCH_ARTICLE_FAILUED = 'FETCH_ARTICLE_FAILUED' as const

export const addArticle = (payload: ArticleType) => ({
  type: ADD_ARTICLE,
  payload,
})

export const removeArticle = (payload: ArticleType['id']) => ({
  type: REMOVE_ARTICLE,
  payload,
})

export const editArticle = (payload: {
  id: ArticleType['id']
  article: ArticleType
}) => ({
  type: EDIT_ARTICLE,
  payload,
})

export const setArticleList = (payload: ArticleListType) => ({
  type: SET_ARTICLE_LIST,
  payload,
})

export type ArticleActionTypes =
  | ReturnType<typeof addArticle>
  | ReturnType<typeof removeArticle>
  | ReturnType<typeof editArticle>
  | ReturnType<typeof setArticleList>
