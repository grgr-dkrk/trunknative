import React from 'react'
import { Header as Component } from '../../components/organisms/Header'
import { ScreenProps } from '../../types/ComponentProps'
import { useDispatch } from 'react-redux'
import { Alert } from 'react-native'

type HeaderProps = ScreenProps

export const Header: React.FC<HeaderProps> = props => {
  const { navigation } = props
  const gotoCreateArticle = () => {}
  const gotoEditArticle = () => {
    props.navigation.navigate('Editor', { id: 'hoge' })
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
