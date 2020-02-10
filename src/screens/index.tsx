import * as React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import DisplayScreen from './Display'
import { Header } from '../containers/Header/Header'
import EditorScreen from './Editor'
import { LABELS } from '../constants/labels'
import { ArticleList } from '../containers/ArticleList'

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: DisplayScreen,
      navigationOptions: props => ({
        title: LABELS.HOME,
        header: () => <Header navigation={props.navigation} />,
      }),
    },
    Display: {
      screen: DisplayScreen,
      navigationOptions: props => ({
        title: props.navigation.getParam('id') || 'no title',
        header: () => <Header navigation={props.navigation} />,
      }),
    },
    Editor: {
      screen: EditorScreen,
      navigationOptions: props => ({
        title: props.navigation.getParam('title'),
        header: () => <Header navigation={props.navigation} />,
      }),
    },
    ArticleList: {
      screen: ArticleList,
      navigationOptions: props => ({
        header: () => <Header navigation={props.navigation} />,
      }),
    },
  },
  {}
)

export const AppContainer = createAppContainer(AppNavigator)
