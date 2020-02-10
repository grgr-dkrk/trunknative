import React from 'react'
import { ScreenProps } from '../../types/ComponentProps'
import { ContentWrapper } from '../ContentWrapper'
import { ArticleList } from 'src/containers/ArticleList'

type DisplayScreenProps = ScreenProps

const DisplayScreen: React.FC<DisplayScreenProps> = props => {
  return (
    <ContentWrapper navigation={props.navigation}>
      <ArticleList navigation={props.navigation} />
    </ContentWrapper>
  )
}

export default DisplayScreen
