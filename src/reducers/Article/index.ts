import { initialArticleState, ArticleStateType } from './state';
import {
  ArticleActionTypes,
  ADD_ARTICLE,
  REMOVE_ARTICLE,
  EDIT_ARTICLE,
  SET_ARTICLE_LIST,
} from './actions';
import { ArticleListType } from 'src/types/Article';

export function ArticleReducer(
  state = initialArticleState,
  action: ArticleActionTypes
): ArticleStateType {
  switch (action.type) {
    case ADD_ARTICLE:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case REMOVE_ARTICLE:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
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
      };
    case SET_ARTICLE_LIST:
      return {
        ...state,
        items: action.payload,
      };
    default:
      const _: never = action;
      return state;
  }
}
