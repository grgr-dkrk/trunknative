import React from 'react'
import { Header as Component } from '../../components/organisms/Header'
import { ScreenProps } from '../../types/ComponentProps'
import { useDispatch } from 'react-redux'

type HeaderProps = ScreenProps

export const Header: React.FC<HeaderProps> = props => {
  const { navigation } = props
  const gotoCreateArticle = () => {}
  const gotoEditArticle = () => {
    props.navigation.navigation.navigate('ContentEditor')
  }
  return (
    <Component
      handleGoToCreateArticle={gotoCreateArticle}
      handleGoToEditArticle={gotoEditArticle}
      navigation={navigation}
    />
  )
}
