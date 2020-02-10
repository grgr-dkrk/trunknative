import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { TabButton } from '../../atoms/TabButton'
import { ScreenProps } from 'src/types/ComponentProps'

type FooterProps = {
  handleGoToList: () => void
}

export const Footer: React.FC<FooterProps> = props => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <TabButton label="List" handlePress={props.handleGoToList}></TabButton>
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
