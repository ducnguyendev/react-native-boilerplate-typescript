import { Platform } from 'react-native'

export const isInteger = (value: number) => {
  return value % 1 === 0
}

export const isIOS = () => {
  return Platform.OS === 'ios'
}

export const isAndroid = () => {
  return Platform.OS === 'android'
}
