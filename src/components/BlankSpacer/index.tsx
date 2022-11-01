import React from 'react'
import {
  StyleSheet,
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle,
  View,
} from 'react-native'

interface BlankSpacerProps {
  height: number
  style?: TextStyle | TextStyle[]
}

const BlankSpacer: React.FC<BlankSpacerProps> = ({
  height,
  style = {},
  ...props
}) => {
  return <View style={[{ height: height }, style]} {...props}></View>
}

export default BlankSpacer

const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold',
  },
  center: {
    textAlign: 'center',
  },
})
