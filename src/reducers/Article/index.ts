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
  SET_EDIT_TITLE,
  SET_EDIT_CONTENT,
  SET_EDIT_TAGS,
} from './actionTypes'

export function ArticleReducer(
  state = initialArticleState,
  action: ArticleActionTypes
): ArticleStateType {
  switch (action.type) {
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
          (items, currentItem) =>
            currentItem.id === action.payload.id
              ? [...items, action.payload.article]
              : [...items, currentItem],
          []
        ),
      }
    case SET_ARTICLE_LIST:
      return {
        ...state,
        items: action.payload,
      }
    case SET_CURRENT_ARTICLE:
      return {
        ...state,
        currentItem:
          state.items.find(item => item.id === action.payload) ||
          // TODO FIX_ME case if id is invalid
          initialArticleData,
      }
    case UPDATE_CURRENT_ARTICLE:
      return {
        ...state,
        currentItem: { ...state.currentItem, ...action.payload },
      }
    case INIT_CURRENT_ARTICLE:
      return {
        ...state,
        currentItem: initialArticleData,
      }
    case SET_EDIT_TITLE:
      return {
        ...state,
        editItem: { ...state.editItem, title: action.payload },
      }
    case SET_EDIT_CONTENT:
      return {
        ...state,
        editItem: { ...state.editItem, content: action.payload },
      }
    case SET_EDIT_TAGS:
      return {
        ...state,
        editItem: { ...state.editItem, tags: action.payload },
      }
    default:
      const _: never = action
      return state
  }
}
