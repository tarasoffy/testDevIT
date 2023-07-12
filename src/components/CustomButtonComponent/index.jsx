import React from 'react'
import { styles } from './CustomButtonComponent.styles'
import { TouchableOpacity, Text} from 'react-native'


const CustomButtonComponent = ({title, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.button}>
      <Text style={styles.textInButton}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButtonComponent