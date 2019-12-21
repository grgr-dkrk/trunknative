import React from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'
import { ScreenProps } from '../../../types/ComponentProps'
import { Heading } from '../../../components/atoms/Heading/'

type HeaderProps = ScreenProps & {}

export const Header: React.FC<HeaderProps> = props => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <Heading level={1}>{props.navigation.navigation.state.routeName}</Heading>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
})
