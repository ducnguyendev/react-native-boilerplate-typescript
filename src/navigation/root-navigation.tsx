import React, { useMemo } from 'react'

import { useFlipper } from '@react-navigation/devtools'
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { isEmpty } from 'lodash'

import { useDeeplink } from '@hooks/useDeeplink'
import { useAppSelector } from '@hooks/useRedux.hook'
import { SCREEN_NAME } from '@navigation/screen-name'
import LoginScreen from '@screens/auth/Login'
import DoneScreen from '@screens/done'
import HomeScreen from '@screens/home'
import IntroScreen from '@screens/intro'
import ThankScreen from '@screens/thank'
import { navigationRef } from '@services/navigation.service'
import { authState } from '@states/auth/auth.selector'

const MainStack = createNativeStackNavigator()

const RootNavigation: React.FC = () => {
  /**
   * Selector
   */
  const { authendicationData } = useAppSelector(authState)
  useFlipper(navigationRef)
  /**
   * Custom Hooks
   */
  useDeeplink()

  const hasToken = useMemo(() => {
    return !isEmpty(authendicationData?.accessToken)
  }, [authendicationData?.accessToken])

  return (
    <NavigationContainer ref={navigationRef}>
      <MainStack.Navigator>
        <MainStack.Group screenOptions={{ headerShown: false }}>
          <MainStack.Screen name={SCREEN_NAME.Intro} component={IntroScreen} />
          <MainStack.Screen name={SCREEN_NAME.Home} component={HomeScreen} />
          <MainStack.Screen name={SCREEN_NAME.Done} component={DoneScreen} />
          <MainStack.Screen name={SCREEN_NAME.Thank} component={ThankScreen} />
        </MainStack.Group>
        {/* {!hasToken ? (
          <MainStack.Group screenOptions={{ headerShown: false }}>
            <MainStack.Screen
              name={SCREEN_NAME.Login}
              component={LoginScreen}
            />
          </MainStack.Group>
        ) : (
         
        )} */}
      </MainStack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigation
