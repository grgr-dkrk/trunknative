import React from 'react'
import { ScreenProps } from '../../types/ComponentProps'
import { ContentDisplay } from '../../containers/ContentDisplay'

type DisplayScreenProps = ScreenProps

const DisplayScreen: React.FC<DisplayScreenProps> = props => {
  return <ContentDisplay navigation={props.navigation} />
}

export default DisplayScreen
