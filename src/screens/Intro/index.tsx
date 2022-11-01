import React, { useEffect } from 'react'
import { StyleSheet, View, SafeAreaView } from 'react-native'

import BlankSpacer from '@components/BlankSpacer'
import Button from '@components/Button'
import ErrorView from '@components/ErrorView'
import Loading from '@components/loading'
import Text from '@components/Text'
import { useAppDispatch, useAppSelector } from '@hooks/useRedux.hook'
import { SCREEN_NAME } from '@navigation/screen-name'
import { NavigationService } from '@services/navigation.service'
import { signOut } from '@states/auth/auth.action'
import { fetchQuestion } from '@states/intro/intro.action'
import { introState } from '@states/intro/intro.selector'

const IntroScreen: React.FC = () => {
  const { loading, error, errorMessage, disabled } = useAppSelector(introState)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchQuestion())
  }, [dispatch])

  const renderError = () => {
    return (
      <ErrorView
        message={errorMessage}
        onPress={() => {
          dispatch(fetchQuestion())
        }}></ErrorView>
    )
  }

  const renderContent = () => {
    return (
      <View style={[styles.container, styles.padding]}>
        <Text type="h1" style={{ fontSize: 32 }}>
          Wellbeing Report
        </Text>

        <BlankSpacer height={15} />

        <Text type="small">Start your Wellbeing journey !</Text>

        <BlankSpacer height={32} />

        <Button
          title="Get started"
          onPress={() => {
            NavigationService.navigation(SCREEN_NAME.Home)
          }}
          disabled={disabled}
        />

        <BlankSpacer height={12} />

        <Button
          onPress={() => {
            dispatch(signOut())
          }}
          title="Log out"
          disabled={disabled}
        />
      </View>
    )
  }

  return (
    <>
      {loading ? <Loading title="missing"></Loading> : null}

      <SafeAreaView style={{ flex: 1 }}>
        {error ? renderError() : renderContent()}
      </SafeAreaView>
    </>
  )
}

export default IntroScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  padding: {
    paddingHorizontal: 20,
  },
})
