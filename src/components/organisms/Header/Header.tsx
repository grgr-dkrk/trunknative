import React from 'react'
import { SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import { ScreenProps } from '../../../types/ComponentProps'
import { Heading } from '../../../components/atoms/Heading/'
import { Paragraph } from '../../../components/atoms/Paragraph'
import { LABELS } from '../../../constants/labels'

type HeaderProps = ScreenProps & {
  handleGoToCreateArticle: () => void
  handleGoToEditArticle: () => void
}

export const Header: React.FC<HeaderProps> = props => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <TouchableOpacity onPress={props.handleGoToCreateArticle}>
        <Paragraph>{LABELS.NEW}</Paragraph>
      </TouchableOpacity>
      <Heading level={1}>{props.navigation.navigation.state.routeName}</Heading>
      <TouchableOpacity onPress={props.handleGoToEditArticle}>
        <Paragraph>{LABELS.EDIT}</Paragraph>
      </TouchableOpacity>
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
