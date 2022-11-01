import React from 'react'
import { StyleSheet, TextStyle, View, ActivityIndicator } from 'react-native'

import { Text } from 'react-native-svg'

interface LoadingProps {
  title: string
  size?: 'small' | 'large'
  style?: TextStyle | TextStyle[]
}

const Loading: React.FC<LoadingProps> = ({
  title = '',
  style = {},
  ...props
}) => {
  return (
    <View
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,.02)',
      }}
      pointerEvents={'none'}>
      <View style={[styles.center, style]} {...props}>
        <ActivityIndicator size="large" />
        <Text>{title}</Text>
      </View>
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
  center: {
    flex: 1,
    position: 'absolute',
    opacity: 0.5,
    backgroundColor: 'black',
    width: '100%',
    height: '100%',
    textAlign: 'center',
    justifyContent: 'center',
  },
})
