import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

type TextAreaProps = {
  handleChangeText: (text: string) => void
}

export const TextArea: React.FC<TextAreaProps> = props => {
  return <TextInput onChangeText={props.handleChangeText} />
}

const styles = StyleSheet.create({
  wrapper: {},
})
