import {
  initialArticleState,
  ArticleStateType,
  initialArticleData,
} from './state'
import { ArticleActionTypes } from './actions'
import { ArticleListType } from 'src/types/Article'
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

export function ArticleReducer(
  state = initialArticleState,
  action: ArticleActionTypes
): ArticleStateType {
  switch (action.type) {
    /**
     * Article List
     */
    case SET_ARTICLE_LIST:
      return {
        ...state,
        items: action.payload,
      }
    case ADD_ARTICLE:
      return {
        ...state,
        items: [...state.items, action.payload],
      }
    case REMOVE_ARTICLE:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      }
    case UPDATE_ARTICLE:
      return {
        ...state,
        items: state.items.reduce<ArticleListType>(
          (items, article) =>
            article.id === action.payload.id
              ? [...items, action.payload.article]
              : [...items, article],
          []
        ),
      }
    /**
     * Article Current Display
     */
    case SET_CURRENT_ARTICLE:
      return {
        ...state,
        currentDisplayItem:
          state.items.find(item => item.id === action.payload) ||
          // TODO FIX_ME case if id is invalid
          initialArticleData,
      }
    case UPDATE_CURRENT_ARTICLE:
      return {
        ...state,
        currentDisplayItem: { ...state.currentDisplayItem, ...action.payload },
      }
    case INIT_CURRENT_ARTICLE:
      return {
        ...state,
        currentDisplayItem: initialArticleData,
      }
    /**
     * Article Editing
     */
    case SET_EDITING_ARTICLE:
      return {
        ...state,
        editingItem:
          state.items.find(item => item.id === action.payload) ||
          // TODO FIX_ME case if id is invalid
          initialArticleData,
      }
    case SET_EDITING_TITLE:
      return {
        ...state,
        editingItem: { ...state.editingItem, title: action.payload },
      }
    case SET_EDITING_CONTENT:
      return {
        ...state,
        editingItem: { ...state.editingItem, content: action.payload },
      }
    case SET_EDITING_TAGS:
      return {
        ...state,
        editingItem: { ...state.editingItem, tags: action.payload },
      }
    default:
      const _: never = action
      return state
  }
}
