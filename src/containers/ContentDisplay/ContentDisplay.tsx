import React from 'react'
import { ScreenProps } from '../../types/ComponentProps'
import { ContentDisplay as Component } from '../../components/organisms/ContentDisplay'
import { useSelector } from 'react-redux'
import { AppState } from '../../store'

type ContentDisplayProps = ScreenProps & {
  content: string
}

export const ContentDisplay: React.FC<ContentDisplayProps> = props => {
  const ArticleState = useSelector((state: AppState) => state.ArticleReducer)
  return <Component content={ArticleState.items[0].content} />
}
