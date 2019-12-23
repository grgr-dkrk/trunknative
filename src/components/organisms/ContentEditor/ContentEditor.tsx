import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

type ContentEditorProps = {
  handleChangeText: (text: string) => void
}

export const ContentEditor: React.FC<ContentEditorProps> = props => {
  return (
    <TextInput onChangeText={props.handleChangeText} style={styles.wrapper} />
  )
}

const styles = StyleSheet.create({
  wrapper: {},
})
