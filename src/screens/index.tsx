import * as React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './Home'
import { Header } from '../containers/Header/Header'

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: props => ({
        title: props.navigation.state.routeName,
        header: () => <Header navigation={props} />,
      }),
    },
  },
  {}
)

export default createAppContainer(AppNavigator)
