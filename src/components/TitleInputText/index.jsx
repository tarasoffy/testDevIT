import React from 'react'
import { styles } from './TitleInputTextComponent.styles'
import {Text} from 'react-native'
import { w } from '../../styles/scale'

const TitleInputTextComponent = ({title}) => {
  return (
    <Text style={styles.titleInput}>{title}</Text>
  )
}

export default TitleInputTextComponent