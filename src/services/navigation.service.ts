import { createRef } from 'react'

import { NavigationContainerRef } from '@react-navigation/native'

export const navigationRef =
  createRef<NavigationContainerRef<ReactNavigation.RootParamList>>()

const navigation = (screen: string, params = {}) => {
  console.log('Navigation navigation', screen)
  // @ts-ignore
  navigationRef.current?.navigate(screen, params)
}

const goBack = () => {
  navigationRef.current?.goBack()
}

export const NavigationService = { navigation, goBack }
