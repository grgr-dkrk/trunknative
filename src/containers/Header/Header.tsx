import React, { useState } from 'react'
import { Header as Component } from '../../components/organisms/Header'
import { ScreenProps } from '../../types/ComponentProps'
import { useSelector, useDispatch } from 'react-redux'
import { Alert } from 'react-native'
import { AppState } from 'src/store'
import {
  updateArticle,
  updateCurrentArticle,
} from '../../reducers/Article/actions'
// @ts-ignore
import uuid from 'uuid'
import { format } from 'date-fns'

type HeaderProps = ScreenProps

export const Header: React.FC<HeaderProps> = props => {
  const { navigation } = props
  const currentArticle = useSelector(
    (state: AppState) => state.ArticleReducer.currentDisplayItem
  )
  const editingArticle = useSelector(
    (state: AppState) => state.ArticleReducer.editingItem
  )
  const dispatch = useDispatch()
  const gotoCreateArticle = () => {
    props.navigation.navigate('Editor', {
      id: uuid(),
      title: format(new Date(), 'dd_MM_yyyy'),
    })
  }
  const gotoEditArticle = () => {
    props.navigation.navigate('Editor', {
      id: currentArticle.id,
      title: currentArticle.title,
    })
  }
  const confirmCancel = () => {
    Alert.alert('Cancel', 'OK?', [
      {
        text: 'No',
        style: 'cancel',
        onPress: () => {},
      },
      {
        text: 'Yes',
        onPress: () => {
          navigation.goBack()
        },
      },
    ])
  }
  const saveArticle = () => {
    dispatch(
      updateArticle({
        id: editingArticle.id,
        article: {
          ...editingArticle,
          content: editingArticle.content,
        },
      })
    )
    dispatch(updateCurrentArticle(editingArticle))
    navigation.goBack()
  }
  return (
    <Component
      handleGoToCreateArticle={gotoCreateArticle}
      handleGoToEditArticle={gotoEditArticle}
      handleCancelEdit={confirmCancel}
      handleSaveEdit={saveArticle}
      navigation={navigation}
    />
  )
}
