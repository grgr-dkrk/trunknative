import React, { useEffect } from 'react'
import { ScreenProps } from '../../types/ComponentProps'
import { ContentDisplay as Component } from '../../components/organisms/ContentDisplay'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../../store'
import { setCurrentArticle } from '../../reducers/Article/actions'

type ContentDisplayProps = ScreenProps

export const ContentDisplay: React.FC<ContentDisplayProps> = props => {
  const ArticleState = useSelector((state: AppState) => state.ArticleReducer)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setCurrentArticle(ArticleState.items[0].id))
  }, [])
  return <Component content={ArticleState.items[0].content} />
}
