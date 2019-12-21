import React from 'react'
import { Header as Component } from '../../components/organisms/Header'
import { ScreenProps } from '../../types/ComponentProps'

type HeaderProps = ScreenProps

export const Header: React.FC<HeaderProps> = props => {
  const { navigation } = props
  return <Component navigation={navigation} />
}
