import React from 'react'
import {
  StyleSheet,
  ButtonProps as RNButtonProps,
  TextStyle,
  TouchableOpacity,
  Text,
  GestureResponderEvent,
} from 'react-native'

interface ButtonProps extends RNButtonProps {
  title: string
  color?: string
  style?: TextStyle | TextStyle[]
}

const Button: React.FC<ButtonProps> = ({
  title = '',
  style = {},
  ...props
}) => {
  const handleOnPress = (e: GestureResponderEvent) => {
    const { onPress } = props
    if (onPress && typeof onPress === 'function') {
      onPress(e)
    }
  }

  return (
    <TouchableOpacity
      style={[styles.buttonStyle, style]}
      {...props}
      onPress={(e) => {
        handleOnPress(e)
      }}>
      <Text style={{ color: 'white' }}> {title}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold',
  },
  center: {
    textAlign: 'center',
  },
  buttonStyle: {
    height: 38,
    width: '100%',
    backgroundColor: '#212529',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
})
