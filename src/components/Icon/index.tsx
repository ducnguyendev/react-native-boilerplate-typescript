import React from 'react'
import { StyleSheet } from 'react-native'

import { createIconSet } from 'react-native-vector-icons'
import { IconProps } from 'react-native-vector-icons/Icon'

import wemeIconConfig from '@assets/fonts/weme-icon.json'

const CustomIcon = createIconSet(wemeIconConfig, 'weme-icon', 'weme-icon.ttf')

const Icon: React.FC<IconProps> = ({ size = 24, style, ...props }) => {
  return (
    <CustomIcon
      size={size}
      {...props}
      style={[styles.container, { width: size }, style]}
    />
  )
}

export default Icon

const styles = StyleSheet.create({
  container: {
    aspectRatio: 1,
  },
})
