import React from 'react'
import { styles } from './Logo.styles'
import { View } from 'react-native'
import Logo from '../../assets/Logo.svg'
import { w } from '../../styles/scale'

const LogoComponent = () => {
  return (
    <View style={styles.logo}>
        <Logo width={w(67.6)} height={w(90)} />
    </View>
  )
}

export default LogoComponent