import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

type ContentDisplayProps = {
  content: string
}

export const ContentDisplay: React.FC<ContentDisplayProps> = props => {
  return (
    <View style={styles.wrapper}>
      <Text>{props.content}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {},
})
