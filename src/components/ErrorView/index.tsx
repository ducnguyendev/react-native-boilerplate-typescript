import React from 'react'
import { StyleSheet, View, Image } from 'react-native'

import BlankSpacer from '@components/BlankSpacer'
import Button from '@components/Button'
import Text from '@components/Text'

const IMAGE_URL = require('@assets/imgs/error_image.png')

interface ErrorViewProps {
  message: string
  style?: object
  onPress?: () => void
}

const ErrorView: React.FC<ErrorViewProps> = ({
  message = '',
  style = {},
  ...props
}) => {
  const handleOnPress = () => {
    const { onPress } = props
    if (onPress && typeof onPress === 'function') {
      onPress()
    }
  }

  return (
    <View style={[styles.container, style]} {...props}>
      <Image source={IMAGE_URL} style={{ width: 200, height: 200 }} />
      <BlankSpacer height={12} />

      <Text type="small">{message}</Text>

      <BlankSpacer height={12} />

      <Button
        onPress={() => {
          handleOnPress()
        }}
        title="Retry"></Button>
    </View>
  )
}

export default ErrorView

const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
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
