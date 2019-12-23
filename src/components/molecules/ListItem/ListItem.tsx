import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Heading } from '../../atoms/Heading'

type ListItemProps = {
  title: string
  headingLevel?: 1 | 2 | 3 | 4
  content?: string
  date: string
}

export const ListItem: React.FC<ListItemProps> = props => {
  return (
    <View style={styles.wrapper}>
      <Heading level={props.headingLevel || 3}>{props.title}</Heading>
      <Text>{props.content}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {},
})
