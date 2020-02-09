import { ArticleType, ArticleListType } from 'src/types/Article'
import {
  ADD_ARTICLE,
  REMOVE_ARTICLE,
  UPDATE_ARTICLE,
  SET_ARTICLE_LIST,
  SET_CURRENT_ARTICLE,
  UPDATE_CURRENT_ARTICLE,
  INIT_CURRENT_ARTICLE,
  SET_EDITING_TITLE,
  SET_EDITING_CONTENT,
  SET_EDITING_TAGS,
  SET_EDITING_ARTICLE,
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

export const updateArticle = (payload: {
  id: ArticleType['id']
  article: ArticleType
}) => ({
  type: UPDATE_ARTICLE,
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

export const updateCurrentArticle = (payload: ArticleType) => ({
  type: UPDATE_CURRENT_ARTICLE,
  payload,
})

export const initCurrentArticle = () => ({
  type: INIT_CURRENT_ARTICLE,
})

/**
 * Edit Article Actions
 */
export const setEditingArticle = (payload: ArticleType['id']) => ({
  type: SET_EDITING_ARTICLE,
  payload,
})
export const setEditingTitle = (payload: ArticleType['title']) => ({
  type: SET_EDITING_TITLE,
  payload,
})
export const setEditingContent = (payload: ArticleType['content']) => ({
  type: SET_EDITING_CONTENT,
  payload,
})
export const setEditingTags = (payload: ArticleType['tags']) => ({
  type: SET_EDITING_TAGS,
  payload,
})

/**
 * Action Types
 */
export type ArticleActionTypes =
  | ReturnType<typeof addArticle>
  | ReturnType<typeof removeArticle>
  | ReturnType<typeof updateArticle>
  | ReturnType<typeof setArticleList>
  | ReturnType<typeof setCurrentArticle>
  | ReturnType<typeof updateCurrentArticle>
  | ReturnType<typeof initCurrentArticle>
  | ReturnType<typeof setEditingArticle>
  | ReturnType<typeof setEditingTitle>
  | ReturnType<typeof setEditingContent>
  | ReturnType<typeof setEditingTags>
