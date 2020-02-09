import React, { useEffect } from 'react'
import { ScreenProps } from '../../types/ComponentProps'
import { ContentEditor as Component } from '../../components/organisms/ContentEditor'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../../store'
import {
  setEditingContent,
  setEditingArticle,
} from '../../reducers/Article/actions'

type ContentEditorProps = ScreenProps

export const ContentEditor: React.FC<ContentEditorProps> = props => {
  const editArticleContent = useSelector(
    (state: AppState) => state.ArticleReducer.editingItem.content
  )
  const dispatch = useDispatch()
  const id = props.navigation.getParam('id')

  useEffect(() => {
    dispatch(setEditingArticle(id))
  }, [])

  const handleChangeText = React.useCallback(
    (text: string) => {
      dispatch(setEditingContent(text))
    },
    [editArticleContent]
  )
  return (
    <Component
      defaultValue={editArticleContent}
      handleChangeText={handleChangeText}
    />
  )
}
