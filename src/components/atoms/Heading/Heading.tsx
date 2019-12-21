import * as React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { ComponentProps } from '../../../types/ComponentProps'

type HeadingProps = ComponentProps & {
  level: 1 | 2 | 3 | 4
}

export const Heading: React.FC<HeadingProps> = props => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>{props.children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {},
  text: {
    fontSize: 24,
  },
})
