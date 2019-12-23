import React from 'react'
import { ScreenProps } from '../../types/ComponentProps'
import { ContentEditor } from '../../containers/ContentEditor'

type EditorScreenProps = ScreenProps

const EditorScreen: React.FC<EditorScreenProps> = props => {
  return <ContentEditor navigation={props.navigation} />
}

export default EditorScreen
