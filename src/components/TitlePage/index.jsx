import React from 'react'
import { styles } from './TitlePage.styles'
import {Text} from 'react-native'

const TitlePageComponent = ({title}) => {
  return (
    <Text style={styles.titlePage}>{title}</Text>
  )
}

export default TitlePageComponent