import React, { useState } from 'react'
import { Header as Component } from '../../components/organisms/Header'
import { ScreenProps } from '../../types/ComponentProps'
import { useSelector, useDispatch } from 'react-redux'
import { Alert } from 'react-native'
import { AppState } from 'src/store'
import { updateArticle } from '../../reducers/Article/actions'

type HeaderProps = ScreenProps

export const Header: React.FC<HeaderProps> = props => {
  const { navigation } = props
  const currentArticle = useSelector(
    (state: AppState) => state.ArticleReducer.currentItem
  )
  const editArticle = useSelector(
    (state: AppState) => state.ArticleReducer.editItem
  )
  const dispatch = useDispatch()
  const gotoCreateArticle = () => {}
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
          dispatch(
            updateArticle({
              id: currentArticle.id,
              article: {
                ...currentArticle,
                content: editArticle.content,
              },
            })
          )
          navigation.goBack()
        },
      },
    ])
  }
  const saveArticle = () => {
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
