import React, { useRef } from 'react'
import { StyleProp, ViewStyle, Animated, TouchableOpacity } from 'react-native'

interface ScaleTouchableProps {
  onPress?: () => void
  style?: StyleProp<ViewStyle>
}

const ScaleTouchable: React.FC<ScaleTouchableProps> = ({
  children,
  onPress = () => null,
  style = {},
}) => {
  const scale = useRef(new Animated.Value(1))

  const onPressIn = () => {
    Animated.timing(scale.current, {
      toValue: 0.8,
      useNativeDriver: true,
      duration: 0,
    }).start()
  }

  const onPressOut = () => {
    Animated.timing(scale.current, {
      toValue: 1,
      useNativeDriver: true,
      duration: 0,
    }).start()
  }

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={onPress}>
      <Animated.View style={[style, { transform: [{ scale: scale.current }] }]}>
        {children}
      </Animated.View>
    </TouchableOpacity>
  )
}

export default ScaleTouchable
