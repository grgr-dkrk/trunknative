import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native'

type ParagraphProps = {}

export const Paragraph: React.FC<ParagraphProps> = props => {
  return (
    <View style={styles.wrapper}>
      <Text>{props.children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {},
})
