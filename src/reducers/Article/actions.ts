import { ArticleType, ArticleListType } from 'src/types/Article'
import {
  ADD_ARTICLE,
  REMOVE_ARTICLE,
  EDIT_ARTICLE,
  SET_ARTICLE_LIST,
  SET_CURRENT_ARTICLE,
  EDIT_CURRENT_ARTICLE,
  INIT_CURRENT_ARTICLE,
} from './actionTypes'

/**
 * ArticleList Actions
 */
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

/**
 * Current Article Actions
 */
export const setCurrentArticle = (payload: ArticleType['id']) => ({
  type: SET_CURRENT_ARTICLE,
  payload,
})

export const editCurrentArticle = (payload: ArticleType) => ({
  type: EDIT_CURRENT_ARTICLE,
  payload,
})

export const initCurrentArticle = () => ({
  type: INIT_CURRENT_ARTICLE,
})

/**
 * Action Types
 */
export type ArticleActionTypes =
  | ReturnType<typeof addArticle>
  | ReturnType<typeof removeArticle>
  | ReturnType<typeof editArticle>
  | ReturnType<typeof setArticleList>
  | ReturnType<typeof setCurrentArticle>
  | ReturnType<typeof editCurrentArticle>
  | ReturnType<typeof initCurrentArticle>
