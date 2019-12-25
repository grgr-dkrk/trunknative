import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

type ContentEditorProps = {
  defaultValue: string
  handleChangeText: (text: string) => void
}

export const ContentEditor: React.FC<ContentEditorProps> = props => {
  return (
    <TextInput
      defaultValue={props.defaultValue}
      onChangeText={props.handleChangeText}
      style={styles.wrapper}
      multiline={true}
    />
  )
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
    fontSize: 18,
    height: '100%',
  },
})
