import React from 'react'
import { FlatList, TouchableOpacity, Text } from 'react-native'
import { useSelector } from 'react-redux'
import { AppState } from '../../store'
import { ScreenProps } from 'src/types/ComponentProps'

type ArticleListProps = ScreenProps

export const ArticleList: React.FC<ArticleListProps> = props => {
  const ArticleList = useSelector(
    (state: AppState) => state.ArticleReducer.items
  )
  const gotoArticle = React.useCallback(
    (id: string, title: string) => {
      props.navigation.navigate(title, { id })
    },
    [ArticleList]
  )
  return (
    <FlatList
      data={ArticleList}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity onPress={() => gotoArticle(item.id, item.title)}>
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )
      }}></FlatList>
  )
}
