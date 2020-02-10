import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

type TabButtonProps = {
  label: string
  handlePress: () => void
}

export const TabButton: React.FC<TabButtonProps> = props => {
  return (
    <TouchableOpacity style={styles.wrapper} onPress={props.handlePress}>
      <Text>{props.label}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  wrapper: {},
})
