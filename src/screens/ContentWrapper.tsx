import React from 'react'
import { View } from 'react-native'
import { ScreenProps } from '../types/ComponentProps'
import { Footer } from '../components/organisms/Footer'

export const ContentWrapper: React.FC<ScreenProps> = props => {
  const gotoNavigation = React.useCallback(() => {
    props.navigation.navigate('ArticleList')
  }, [])

  return (
    <View>
      {props.children}
      <Footer handleGoToList={gotoNavigation} />
    </View>
  )
}
