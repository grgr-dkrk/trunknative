import React from 'react'
import { ScreenProps } from '../../types/ComponentProps'
import { ContentEditor } from '../../containers/ContentEditor'
import { ContentWrapper } from '../ContentWrapper'

type EditorScreenProps = ScreenProps

const EditorScreen: React.FC<EditorScreenProps> = props => {
  return (
    <ContentWrapper navigation={props.navigation}>
      <ContentEditor navigation={props.navigation} />
    </ContentWrapper>
  )
}

export default EditorScreen
