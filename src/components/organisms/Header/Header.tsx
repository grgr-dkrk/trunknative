import React from 'react'
import { SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import { ScreenProps } from '../../../types/ComponentProps'
import { Heading } from '../../../components/atoms/Heading/'
import { LABELS } from '../../../constants/labels'
import { TextInput } from 'react-native-gesture-handler'

type HeaderProps = ScreenProps & {
  handleGoToCreateArticle: () => void
  handleGoToEditArticle: () => void
  handleCancelEdit: () => void
  handleSaveEdit: () => void
}

export const Header: React.FC<HeaderProps> = props => {
  const isEditor = props.navigation.state.routeName === 'Editor'
  return (
    <SafeAreaView style={styles.wrapper}>
      {/* New, Cancel */}
      {isEditor ? (
        <TouchableOpacity onPress={props.handleCancelEdit}>
          <Heading level={1}>{LABELS.CANCEL}</Heading>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={props.handleGoToCreateArticle}>
          <Heading level={1}>{LABELS.NEW}</Heading>
        </TouchableOpacity>
      )}
      {/* PageName */}
      {isEditor ? (
        <TextInput
          defaultValue={props.navigation.getParam('title')}></TextInput>
      ) : (
        <Heading level={1}>{props.navigation.state.routeName}</Heading>
      )}
      {/* Edit, Save */}
      {isEditor ? (
        <TouchableOpacity onPress={props.handleSaveEdit}>
          <Heading level={1}>{LABELS.SAVE}</Heading>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={props.handleGoToEditArticle}>
          <Heading level={1}>{LABELS.EDIT}</Heading>
        </TouchableOpacity>
      )}
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
