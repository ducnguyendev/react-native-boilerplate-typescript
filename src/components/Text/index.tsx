import React from 'react'
import {
  StyleSheet,
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle,
} from 'react-native'

import { COLORS } from '@constants/color'
import { FONTS } from '@constants/fonts'

interface TextProps extends RNTextProps {
  type?:
  | 'caption'
  | 'small'
  | 'small_medium'
  | 'body1'
  | 'h5'
  | 'h4'
  | 'h3'
  | 'h2'
  | 'h1'
  bold?: boolean
  center?: boolean
  style?: TextStyle | TextStyle[]
}

const Text: React.FC<TextProps> = ({
  type = 'body1',
  bold,
  center,
  style = {},
  children,
  ...props
}) => {
  return (
    <RNText
      style={[
        styles[type],
        style,
        bold && styles.bold,
        center && styles.center,
      ]}
      {...props}>
      {children}
    </RNText>
  )
}

export default Text

const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold',
  },
  center: {
    textAlign: 'center',
  },

  /**
   * Text style base on type prop
   */
  h1: {
    fontSize: FONTS.size.h1,
    color: COLORS.BLACK,
    fontWeight: '500',
  },
  h2: {
    fontSize: FONTS.size.h2,
    color: COLORS.BLACK,
    fontWeight: '500',
  },
  h3: {
    fontSize: FONTS.size.h3,
    color: COLORS.BLACK,
    fontWeight: '500',
  },
  h4: {
    fontSize: FONTS.size.h4,
    color: COLORS.BLACK,
    fontWeight: '500',
  },
  h5: {
    fontSize: FONTS.size.h5,
    color: COLORS.BLACK,
  },
  body1: {
    fontSize: FONTS.size.body1,
    color: COLORS.BLACK,
  },
  small: {
    fontSize: FONTS.size.small,
    color: COLORS.BLACK,
  },
  small_medium: {
    fontSize: FONTS.size.small,
    color: COLORS.BLACK,
    fontWeight: '500',
  },
  caption: {
    fontSize: FONTS.size.caption,
    color: COLORS.BLACK,
  },
})
