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
  EDIT_ARTICLE,
  SET_ARTICLE_LIST,
  SET_CURRENT_ARTICLE,
  EDIT_CURRENT_ARTICLE,
  INIT_CURRENT_ARTICLE,
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
    case EDIT_ARTICLE:
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
    case EDIT_CURRENT_ARTICLE:
      return {
        ...state,
        currentItem: { ...state.currentItem, ...action.payload },
      }
    case INIT_CURRENT_ARTICLE:
      return {
        ...state,
        currentItem: initialArticleData,
      }
    default:
      const _: never = action
      return state
  }
}
