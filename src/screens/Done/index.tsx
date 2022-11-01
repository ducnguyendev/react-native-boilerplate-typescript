import React, { useEffect } from 'react'
import { StyleSheet, View, SafeAreaView, TouchableOpacity } from 'react-native'

import BlankSpacer from '@components/BlankSpacer'
import Button from '@components/Button'
import ErrorView from '@components/ErrorView'
import Loading from '@components/loading'
import Text from '@components/Text'
import { useAppDispatch, useAppSelector } from '@hooks/useRedux.hook'
import { SCREEN_NAME } from '@navigation/screen-name'
import { NavigationService } from '@services/navigation.service'
import { submitAnswer } from '@states/done/done.action'
import { doneState } from '@states/done/done.selector'

const DoneScreen: React.FC = () => {
  const { loading, error, errorMessage } = useAppSelector(doneState)
  const dispatch = useAppDispatch()

  const renderError = () => {
    return (
      <ErrorView
        message={errorMessage}
        onPress={() => {
          dispatch(submitAnswer())
        }}></ErrorView>
    )
  }

  const renderContent = () => {
    return (
      <View style={[styles.container, styles.padding]}>
        <Text type="h1" style={{ fontSize: 32 }}>
          Well Done Jan!
        </Text>

        <BlankSpacer height={15} />

        <TouchableOpacity
          onPress={() => NavigationService.navigation(SCREEN_NAME.Home)}>
          <Text type="small">Edit Your Answers</Text>
        </TouchableOpacity>

        <BlankSpacer height={32} />

        <Button
          title="Submit"
          onPress={() => {
            dispatch(submitAnswer())
            // NavigationService.navigation(SCREEN_NAME.Thank)
          }}
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

export default DoneScreen

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
