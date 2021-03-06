import React from 'react'
import { ScreenProps } from '../../types/ComponentProps'
import { ContentDisplay } from '../../containers/ContentDisplay'
import { ContentWrapper } from '../ContentWrapper'

type DisplayScreenProps = ScreenProps

const DisplayScreen: React.FC<DisplayScreenProps> = props => {
  return (
    <ContentWrapper navigation={props.navigation}>
      <ContentDisplay navigation={props.navigation} />
    </ContentWrapper>
  )
}

export default DisplayScreen
