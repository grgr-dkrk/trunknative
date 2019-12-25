import React, { useEffect } from 'react'
import { ScreenProps } from '../../types/ComponentProps'
import { ContentEditor as Component } from '../../components/organisms/ContentEditor'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../../store'
import {
  editCurrentArticle,
  setCurrentArticle,
} from '../../reducers/Article/actions'

type ContentEditorProps = ScreenProps

export const ContentEditor: React.FC<ContentEditorProps> = props => {
  const currentArticle = useSelector(
    (state: AppState) => state.ArticleReducer.currentItem
  )
  const dispatch = useDispatch()
  const id = props.navigation.getParam('id')

  useEffect(() => {
    dispatch(setCurrentArticle(id))
  }, [])

  const handleChangeText = React.useCallback(
    (text: string) => {
      dispatch(editCurrentArticle({ ...currentArticle, content: text }))
    },
    [currentArticle.content]
  )
  return <Component handleChangeText={handleChangeText} />
}
