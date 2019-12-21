import React from 'react'
import { ScreenProps } from '../../types/ComponentProps'
import { ContentDisplay } from '../../containers/ContentDisplay'

type HomeScreenProps = ScreenProps

const HomeScreen: React.FC<HomeScreenProps> = props => {
  return <ContentDisplay navigation={props.navigation} />
}

export default HomeScreen
