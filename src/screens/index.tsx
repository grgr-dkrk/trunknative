import * as React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './Home'
import { Header } from '../containers/Header/Header'
import EditorScreen from './Editor'
import { LABELS } from '../constants/labels'

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: props => ({
        title: LABELS.HOME,
        header: () => <Header navigation={props.navigation} />,
      }),
    },
    Viewer: {
      screen: HomeScreen,
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
  },
  {}
)

export default createAppContainer(AppNavigator)
