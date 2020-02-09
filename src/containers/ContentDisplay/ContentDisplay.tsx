import React, { useEffect } from 'react'
import { ScreenProps } from '../../types/ComponentProps'
import { ContentDisplay as Component } from '../../components/organisms/ContentDisplay'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../../store'
import { setCurrentArticle } from '../../reducers/Article/actions'

type ContentDisplayProps = ScreenProps

export const ContentDisplay: React.FC<ContentDisplayProps> = props => {
  const currentArticle = useSelector(
    (state: AppState) => state.ArticleReducer.currentDisplayItem
  )
  const dispatch = useDispatch()
  const id = props.navigation.state.routeName
  useEffect(() => {
    dispatch(setCurrentArticle(id))
  }, [])
  return <Component content={currentArticle.content} />
}
