import React from 'react'
import { StyleSheet, View } from 'react-native'
import { ScreenProps } from '../../types/ComponentProps'

type HomeScreenProps = ScreenProps & {}

const HomeScreen: React.FC<HomeScreenProps> = props => {
  return <View style={styles.wrapper}></View>
}

const styles = StyleSheet.create({
  wrapper: {},
})

export default HomeScreen
